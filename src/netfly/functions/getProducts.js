// netlify/functions/getProducts.js

// چون این تابع در زمان بیلد یا لانچ در Netlify اجرا می‌شود، 
// ما می‌توانیم از Node.js استفاده کنیم تا فایل db.json را بخوانیم:
const path = ("path");
const fs = ("fs");

// نام فایل db.json را بدقت تایپ کنید
const dataFilePath = path.join(__dirname, "../../db.json");

exports.handler = async function (event) {
  try {
    // === خواندن db.json از روی دیسک ===
    const fileData = fs.readFileSync(dataFilePath, "utf-8");
    const { product } = JSON.parse(fileData); // آرایهٔ محصولات

    // === پارس کردن کوئری‌استرینگ (query parameters) ===
    // event.queryStringParameters یک آبجکت ساده از ?page=1&per_page=4&title=xyz است
    const q = event.queryStringParameters || {};
    // صفحه (از شمارهٔ ۱ شروع)
    const page = parseInt(q.page) || 1;
    // تعداد در هر صفحه
    const per_page = parseInt(q.per_page) || 4;
    // جستجوی عنوان (اگر چیزی فرستاده نشده می‌گیریم "")
    const titleFilter = (q.title || "").toLowerCase();

    // === فیلتر بر اساس title (اگر عنوان خالی نبود) ===
    let filtered = product;
    if (titleFilter) {
      filtered = product.filter((p) =>
        p.title.toLowerCase().includes(titleFilter)
      );
    }

    // === پیجینیشن ===
    const totalItems = filtered.length;
    // تعداد کل صفحه‌ها = ceil(totalItems / per_page)
    const totalPages = Math.ceil(totalItems / per_page) || 1;
    // اندیس شروع و پایان در آرایهٔ فیلترشده
    const startIdx = (page - 1) * per_page;
    const endIdx = startIdx + per_page;

    const paginatedData = filtered.slice(startIdx, endIdx);

    // === خروجی نهایی (هم آرایهٔ داده و هم تعداد صفحه‌ها) ===
    const response = {
      data: paginatedData,  // آرایهٔ محصولاتی که در این صفحه هستند
      pages: totalPages,    // تعداد کل صفحات
      total: totalItems     // (اختیاری) تعداد کل آیتم‌ها بعد از فیلتر
    };

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(response)
    };
  } catch (err) {
    console.error("Error reading or processing db.json:", err);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: "Internal Server Error" })
    };
  }
};
