# Get API Random

## How to Access
1. Jalankan server di WSL dengan perintah:
   ```
   node index.js
   ```
3. Buka browser atau postman untuk mendapatkan API key:
   ```
   GET http://localhost:3000/getkey
   ```
4. Untuk mencoba autentikasi, kirim request endpoint berikut:
   ```
   POST http://localhost:3000/getaccess
   ```
   dengan body (JSON):
   ```
   {
    "url": "htpp://localhost:3000/getaccess",
    "apikey": "API_KEY_YANG_ANDA_DAPAT"
   }
   ```
5. Jika API key yang Anda masukkan benar, maka akan menampilkan pesan `Anda boleh akses`
6. Jika API key yang Anda masukkan salah, maka akan menampilkan pesan `Who ar u ngab?`
