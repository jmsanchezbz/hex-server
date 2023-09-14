# hex-server

You're one step away from setting up your own instance of go.hex.com on your local machine. Choose the method that suits you best:

1. 📦 Use a Pre-built Binary: We offer pre-built binaries for various distributions, listed below.
2. 🔧 Build from Source: If you prefer, you can clone this repository and compile your own binary.

## Available Pre-built Binaries:
Downloads: https://gitlab.com/pulsechaincom/hex-server/-/releases

| Package                             | Intel (amd64) | ARM (arm64) |
|-------------------------------------|:-------------:|:-----------:|
| MacOS.zip                           |       x       |      x      |
| hex-server_1.0.0_windows_amd64.zip  |       x       |             |
| hex-server_1.0.0_windows_arm64.zip  |               |      x      |
| hex-server_1.0.0_linux_arm64.tar.gz |               |      x      |
| hex-server_1.0.0_linux_amd64.tar.gz |       x       |             |

### ⚠️ Important Notice for MacOS Users ⚠️
MacOS mandates the use of digitally signed binaries, which prevents us from directly distributing the binary for this platform.

🔹 Alternate Solution: We provide a `MacOS.zip` package. Upon installation, it sets up a lightweight webserver, enabling you to seamlessly run the website.

🔹 For Advanced Users: If you wish to run the same binary as other operating systems, execute the following commands in your Terminal:

#### Install dependencies
```bash
# Install go by either:
# 1. Following instructions on https://go.dev/doc/install
# 2. Install the following package manager (Homebrew https://brew.sh/) that can install go

# The next two lines are for option 2.
# If you have go installed or used option 1, you don't need the following lines. 
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install go
```

#### Run after dependencies are installed
```bash
git clone https://gitlab.com/pulsechaincom/hex-server.git
cd hex-server
go build -o hex-server ./cmd/hex-server/main.go

# Run the built binary
./hex-server
```

