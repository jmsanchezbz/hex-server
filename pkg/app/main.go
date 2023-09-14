package app

import (
	"embed"
	"fmt"
	"github.com/sirupsen/logrus"
	"io/fs"
	"net/http"
	"os/exec"
	"runtime"
	"time"
)

//go:embed dist
var vueApp embed.FS

func Serve(addr string) {
	url := fmt.Sprintf("http://%s", addr)
	subFS, _ := fs.Sub(vueApp, "dist")
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Serve the embedded Vue.js files
		http.FileServer(http.FS(subFS)).ServeHTTP(w, r)
	})

	logrus.Infof("You can access the HEX server at: %s", url)

	// Start the Go HTTP server in a separate goroutine
	go func() {
		if err := http.ListenAndServe(addr, nil); err != nil {
			logrus.Fatalf("Failed to start server: %s", err)
		}
	}()

	// Give the server a moment to start
	time.Sleep(1 * time.Second)

	// Open the URL in the default browser
	if err := openBrowser(url); err != nil {
		logrus.Errorf("Failed to open browser: %s", err)
	}
}

func openBrowser(url string) error {
	var cmd *exec.Cmd

	switch runtime.GOOS {
	case "windows":
		cmd = exec.Command("cmd", "/c", "start", url)
	case "darwin":
		cmd = exec.Command("open", url)
	case "linux":
		cmd = exec.Command("xdg-open", url)
	default:
		return fmt.Errorf("unsupported platform")
	}

	return cmd.Start()
}
