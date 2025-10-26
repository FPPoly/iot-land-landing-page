# IoT Land Landing Page

Landing page tĩnh cho dự án IoT Land, deploy trên Vercel.

## 🔗 URL

- `https://iot-land.vercel.app`

## 📁 Cấu trúc dự án

```
iot-land-landing-page/
├── public/
│   └── assets/             # Hình ảnh, icons, tài nguyên tĩnh
├── src/
│   ├── modules/            # Các trang chính
│   │   ├── landing/        # Trang chủ
│   │   │   ├── index.html
│   │   │   ├── style.css
│   │   │   └── main.js
│   │   ├── privacy-policy/  # Trang chính sách bảo mật
│   │   └── support/         # Trang hỗ trợ
│   └── shared/              # Code dùng chung
│       ├── global.css       # CSS toàn cục
│       ├── header.html      # Header component
│       ├── footer.html      # Footer component
│       └── utils.js         # Hàm tiện ích
└── vercel.json              # Config deploy Vercel
```

## 🚀 Cách chạy

### Chạy local

```bash
# Mở file HTML trực tiếp trong trình duyệt
# Hoặc dùng Live Server (VS Code extension)
```

### Deploy lên Vercel

```bash
# Đã config sẵn trong vercel.json
# Push code lên Git và connect với Vercel
```

## 💻 Luồng code

### 1. **Thêm trang mới**

#### Không khuyên dùng vì đã cấu hình sẵn

- Tạo folder trong `src/modules/[tên-trang]/`
- Tạo 3 file: `index.html`, `style.css`, `main.js`
- Thêm route trong `vercel.json`:

```json
{ "src": "/ten-trang", "dest": "/src/modules/ten-trang/index.html" }
```

### 2. **Sửa giao diện**

- **CSS toàn cục**: Sửa `src/shared/global.css`
- **CSS riêng từng trang**: Sửa `style.css` trong folder trang đó
- **HTML**: Sửa `index.html` trong folder trang

### 3. **Thêm tính năng JS**

- **Logic riêng**: Viết trong `main.js` của từng trang
- **Hàm dùng chung**: Viết trong `src/shared/utils.js`

### 4. **Thêm assets**

- Đặt file vào `public/assets/`
- Dùng đường dẫn: `/public/assets/ten-file.png`

## 🔗 Routes

- `/` → Landing page
- `/privacy-policy` → Chính sách bảo mật
- `/support` → Hỗ trợ

## 🛠️ Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- Vercel (hosting)
