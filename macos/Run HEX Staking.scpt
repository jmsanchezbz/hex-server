FasdUAS 1.101.10   ��   ��    k             l     ��  ��    E ? -- -- -- -- -- -- HOW TO RUN HEX STAKING -- -- -- -- -- -- --      � 	 	 ~   - -   - -   - -   - -   - -   - -   H O W   T O   R U N   H E X   S T A K I N G   - -   - -   - -   - -   - -   - -   - -     
  
 l     ��������  ��  ��        l     ��  ��    | v This script will run a simple local webserver with simple Javascript so that you can interact with go.hex.com locally     �   �   T h i s   s c r i p t   w i l l   r u n   a   s i m p l e   l o c a l   w e b s e r v e r   w i t h   s i m p l e   J a v a s c r i p t   s o   t h a t   y o u   c a n   i n t e r a c t   w i t h   g o . h e x . c o m   l o c a l l y      l     ��������  ��  ��        l     ��  ��    Y S Step 1) Press the grey ? symbol (in between the square and hammer above this text)     �   �   S t e p   1 )   P r e s s   t h e   g r e y  %�   s y m b o l   ( i n   b e t w e e n   t h e   s q u a r e   a n d   h a m m e r   a b o v e   t h i s   t e x t )      l     ��������  ��  ��        l     ��  ��    � � Step 2) There are two pieces of software (Node.js and a library called http-server) which will be needed to run this script, if they are not already installed, this script will ask to install them for you.     �  �   S t e p   2 )   T h e r e   a r e   t w o   p i e c e s   o f   s o f t w a r e   ( N o d e . j s   a n d   a   l i b r a r y   c a l l e d   h t t p - s e r v e r )   w h i c h   w i l l   b e   n e e d e d   t o   r u n   t h i s   s c r i p t ,   i f   t h e y   a r e   n o t   a l r e a d y   i n s t a l l e d ,   t h i s   s c r i p t   w i l l   a s k   t o   i n s t a l l   t h e m   f o r   y o u .       l     ��������  ��  ��      ! " ! l     �� # $��   # � � Step 3) After the required software is installed, it will set up the server and open your browser window to http://localhost:3690 which will be running a local version of the Hex staking app for you    $ � % %�   S t e p   3 )   A f t e r   t h e   r e q u i r e d   s o f t w a r e   i s   i n s t a l l e d ,   i t   w i l l   s e t   u p   t h e   s e r v e r   a n d   o p e n   y o u r   b r o w s e r   w i n d o w   t o   h t t p : / / l o c a l h o s t : 3 6 9 0   w h i c h   w i l l   b e   r u n n i n g   a   l o c a l   v e r s i o n   o f   t h e   H e x   s t a k i n g   a p p   f o r   y o u "  & ' & l     ��������  ��  ��   '  ( ) ( l     �� * +��   * y s Step 4) When you are done, you can come back to the Script Editor app and press Enter or OK to close the webserver    + � , , �   S t e p   4 )   W h e n   y o u   a r e   d o n e ,   y o u   c a n   c o m e   b a c k   t o   t h e   S c r i p t   E d i t o r   a p p   a n d   p r e s s   E n t e r   o r   O K   t o   c l o s e   t h e   w e b s e r v e r )  - . - l     ��������  ��  ��   .  / 0 / l     �� 1 2��   1 B < -- -- -- -- -- -- END OF INSTRUCTIONS -- -- -- -- -- -- --     2 � 3 3 x   - -   - -   - -   - -   - -   - -   E N D   O F   I N S T R U C T I O N S   - -   - -   - -   - -   - -   - -   - -   0  4 5 4 i      6 7 6 I      �� 8���� 0 replace_chars   8  9 : 9 o      ���� 0 	this_text   :  ; < ; o      ���� 0 search_string   <  =�� = o      ���� 0 replacement_string  ��  ��   7 k       > >  ? @ ? r      A B A l     C���� C o     ���� 0 search_string  ��  ��   B n      D E D 1    ��
�� 
txdl E 1    ��
�� 
ascr @  F G F r     H I H n    	 J K J 2    	��
�� 
citm K o    ���� 0 	this_text   I l      L���� L o      ���� 0 	item_list  ��  ��   G  M N M r     O P O l    Q���� Q o    ���� 0 replacement_string  ��  ��   P n      R S R 1    ��
�� 
txdl S 1    ��
�� 
ascr N  T U T r     V W V c     X Y X l    Z���� Z o    ���� 0 	item_list  ��  ��   Y m    ��
�� 
TEXT W o      ���� 0 	this_text   U  [ \ [ r     ] ^ ] m     _ _ � ` `   ^ n      a b a 1    ��
�� 
txdl b 1    ��
�� 
ascr \  c�� c L      d d o    ���� 0 	this_text  ��   5  e f e l     ��������  ��  ��   f  g h g l     �� i j��   i + % Attempt to find Node.js installation    j � k k J   A t t e m p t   t o   f i n d   N o d e . j s   i n s t a l l a t i o n h  l m l l    # n���� n Q     # o p q o I   �� r��
�� .sysoexecTEXT���     TEXT r m     s s � t t , / u s r / l o c a l / b i n / n o d e   - v��   p R      ������
�� .ascrerr ****      � ****��  ��   q k    # u u  v w v l   �� x y��   x 4 . Node.js is not installed. Installing Node.js.    y � z z \   N o d e . j s   i s   n o t   i n s t a l l e d .   I n s t a l l i n g   N o d e . j s . w  { | { I   �� }��
�� .sysodlogaskr        TEXT } m     ~ ~ �   � N o d e . j s   ( a   r e q u i r e m e n t   f o r   H E X   S t a k i n g   a p p )   i s   n o t   i n s t a l l e d .   I n s t a l l   N o d e . j s ?��   |  � � � l   ��������  ��  ��   �  � � � l   �� � ���   � - ' Download and run the Node.js installer    � � � � N   D o w n l o a d   a n d   r u n   t h e   N o d e . j s   i n s t a l l e r �  � � � I   �� ���
�� .sysoexecTEXT���     TEXT � m     � � � � � � c u r l   - o   / t m p / n o d e _ i n s t a l l e r . p k g   h t t p s : / / n o d e j s . o r g / d i s t / v 8 . 1 7 . 0 / n o d e - v 8 . 1 7 . 0 . p k g��   �  ��� � I   #�� � �
�� .sysoexecTEXT���     TEXT � m     � � � � � ` i n s t a l l e r   - p k g   / t m p / n o d e _ i n s t a l l e r . p k g   - t a r g e t   / � �� ���
�� 
badm � m    ��
�� boovtrue��  ��  ��  ��   m  � � � l     ��������  ��  ��   �  � � � l     �� � ���   �   Starting HEX Mining App    � � � � 0   S t a r t i n g   H E X   M i n i n g   A p p �  � � � l  $ A ����� � Q   $ A � � � � I  ' ,�� ���
�� .sysoexecTEXT���     TEXT � m   ' ( � � � � � � / u s r / l o c a l / b i n / n o d e   / u s r / l o c a l / b i n / n p m   l i s t   - g   - - d e p t h = 0   |   g r e p   - i   ' h t t p - s e r v e r '   >   / d e v / n u l l��   � R      ������
�� .ascrerr ****      � ****��  ��   � k   4 A � �  � � � l  4 4�� � ���   � > 8 http-server is not installed. Installing http-server...    � � � � p   h t t p - s e r v e r   i s   n o t   i n s t a l l e d .   I n s t a l l i n g   h t t p - s e r v e r . . . �  � � � I  4 9�� ���
�� .sysodlogaskr        TEXT � m   4 5 � � � � � � h t t p - s e r v e r   ( a   r e q u i r e m e n t   f o r   H E X   S t a k i n g   a p p )   i s   n o t   i n s t a l l e d .   I n s t a l l   h t t p - s e r v e r ?��   �  ��� � I  : A�� � �
�� .sysoexecTEXT���     TEXT � m   : ; � � � � � � / u s r / l o c a l / b i n / n o d e   / u s r / l o c a l / b i n / n p m   i n s t a l l   - g   h t t p - s e r v e r @ 1 3 . 1 . 0 � �� ���
�� 
badm � m   < =��
�� boovtrue��  ��  ��  ��   �  � � � l     ��������  ��  ��   �  � � � l  B S ����� � r   B S � � � n   B O � � � 1   K O��
�� 
psxp � l  B K ����� � b   B K � � � l  B I ����� � I  B I�� � �
�� .earsffdralis        afdr �  f   B C � �� ���
�� 
rtyp � m   D E��
�� 
ctxt��  ��  ��   � m   I J � � � � �  : :��  ��   � o      ���� 
0 mypath  ��  ��   �  � � � l     ��������  ��  ��   �  � � � l  T _ ����� � I  T _�� ���
�� .sysodlogaskr        TEXT � b   T [ � � � m   T W � � � � � B S t a r t i n g   H E X   S t a k i n g   s e r v e r   f r o m   � o   W Z���� 
0 mypath  ��  ��  ��   �  � � � l     ��������  ��  ��   �  � � � l     �� � ���   � * $ Start http-server in the background    � � � � H   S t a r t   h t t p - s e r v e r   i n   t h e   b a c k g r o u n d �  � � � l  ` o ���� � I  ` o�~ ��}
�~ .sysoexecTEXT���     TEXT � b   ` k � � � b   ` g � � � m   ` c � � � � �  c d   ' � o   c f�|�| 
0 mypath   � m   g j � � � � � � '   & &   s c r e e n   - d   - m   / u s r / l o c a l / b i n / n o d e   / u s r / l o c a l / b i n / h t t p - s e r v e r   - p   3 6 9 0   . / d i s t�}  ��  �   �  � � � l  p u ��{�z � r   p u � � � m   p q�y�y   � o      �x�x 0 serverrunning serverRunning�{  �z   �  � � � l  v { ��w�v � r   v { � � � m   v w�u�u   � o      �t�t 0 attempts  �w  �v   �  � � � l  | � ��s�r � W   | � � � � Q   � � � � � � k   � � � �  � � � I  � ��q ��p
�q .sysodelanull��� ��� nmbr � m   � ��o�o �p   �  � � � I  � ��n ��m
�n .sysoexecTEXT���     TEXT � m   � � � � � � � 4 c u r l   h t t p : / / l o c a l h o s t : 3 6 9 0�m   �  ��l � r   � � � � � m   � ��k�k  � o      �j�j 0 serverrunning serverRunning�l   � R      �i�h�g
�i .ascrerr ****      � ****�h  �g   � k   � �    r   � � m   � ��f�f   o      �e�e 0 serverrunning serverRunning �d r   � � [   � �	 o   � ��c�c 0 attempts  	 m   � ��b�b  o      �a�a 0 attempts  �d   � l  � �
�`�_
 G   � � =   � � o   � ��^�^ 0 serverrunning serverRunning m   � ��]�]  ?   � � o   � ��\�\ 0 attempts   m   � ��[�[ �`  �_  �s  �r   �  l     �Z�Y�X�Z  �Y  �X   �W l  � ��V�U Z   � ��T ?   � � o   � ��S�S 0 attempts   m   � ��R�R  I  � ��Q�P
�Q .sysodlogaskr        TEXT m   � � � Z H E X   S t a k i n g   A p p   c o u l d n ' t   l o a d   o n   y o u r   m a c h i n e�P  �T   k   � �  l  � ��O !�O    : 4 Open the index.html file in the default web browser   ! �"" h   O p e n   t h e   i n d e x . h t m l   f i l e   i n   t h e   d e f a u l t   w e b   b r o w s e r #$# I  � ��N%�M
�N .sysoexecTEXT���     TEXT% m   � �&& �'' 4 o p e n   h t t p : / / l o c a l h o s t : 3 6 9 0�M  $ ()( l  � ��L�K�J�L  �K  �J  ) *+* l  � ��I,-�I  , 0 * Wait for user input (press Enter to exit)   - �.. T   W a i t   f o r   u s e r   i n p u t   ( p r e s s   E n t e r   t o   e x i t )+ /0/ I  � ��H1�G
�H .sysodlogaskr        TEXT1 m   � �22 �33 T P r e s s   E n t e r   o r   O K   t o   e x i t   H E X   S t a k i n g   A p p .�G  0 454 l  � ��F�E�D�F  �E  �D  5 676 l  � ��C89�C  8   Close the server   9 �:: "   C l o s e   t h e   s e r v e r7 ;�B; I  � ��A<�@
�A .sysoexecTEXT���     TEXT< m   � �== �>> � p s   a u x w w   |   g r e p   h t t p - s e r v e r   |   g r e p   - v   g r e p   |   a w k   ' { p r i n t   $ 2 } '   |   x a r g s   k i l l�@  �B  �V  �U  �W       �??@A�?  ? �>�=�> 0 replace_chars  
�= .aevtoappnull  �   � ****@ �< 7�;�:BC�9�< 0 replace_chars  �; �8D�8 D  �7�6�5�7 0 	this_text  �6 0 search_string  �5 0 replacement_string  �:  B �4�3�2�1�4 0 	this_text  �3 0 search_string  �2 0 replacement_string  �1 0 	item_list  C �0�/�.�- _
�0 
ascr
�/ 
txdl
�. 
citm
�- 
TEXT�9 !���,FO��-E�O���,FO��&E�O���,FO�A �,E�+�*FG�)
�, .aevtoappnull  �   � ****E k     �HH  lII  �JJ  �KK  �LL  �MM  �NN  �OO  �PP �(�(  �+  �*  F  G  s�'�&�% ~�$ � ��# � � ��"�!�  ��� � � ������ �&2=
�' .sysoexecTEXT���     TEXT�&  �%  
�$ .sysodlogaskr        TEXT
�# 
badm
�" 
rtyp
�! 
ctxt
�  .earsffdralis        afdr
� 
psxp� 
0 mypath  � 0 serverrunning serverRunning� 0 attempts  � 
� 
bool
� .sysodelanull��� ��� nmbr�) � 
�j W X  �j O�j O��el O 
�j W X  �j O��el O)��l �%a ,E` Oa _ %j Oa _ %a %j OjE` OjE` O Ih_ k 
 _ a a & lj Oa j OkE` W X  jE` O_ kE` [OY��O_ a  a j Y a j Oa j Oa j  ascr  ��ޭ