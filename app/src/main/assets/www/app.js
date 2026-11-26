(function () {
  "use strict";
  const DB_NAME = "flexpro-local";
  const DB_VERSION = 1;
  const STORE_NAMES = ["config", "customers", "invoices", "expenses", "purchases", "cashEntries", "adjustments"];
  const T = {
    en: {
      dashboard:"Dashboard", customers:"Customers", invoices:"Sales invoices", cash:"Cash book", expenses:"Expenses", purchases:"Purchases", reports:"Reports", settings:"Settings",
      today:"Today", sales:"Sales", cashBalance:"Cash balance", recoveries:"Recoveries", outstanding:"Outstanding", expensesToday:"Expenses today", purchasesToday:"Purchases today", netToday:"Net profit today", salesTrend:"Sales overview", last7:"Last 7 days", recentActivity:"Recent activity", quickSummary:"Today at a glance", noActivity:"No activity recorded yet.", newInvoice:"New invoice", addCustomer:"Add customer", addExpense:"Add expense", addPurchase:"Add purchase", addCash:"Cash entry", type:"Type",
      customer:"Customer", name:"Full name", mobile:"Mobile number", address:"Address", email:"Email (optional)", search:"Search", actions:"Actions", ledger:"Ledger", view:"View", edit:"Edit", save:"Save", cancel:"Cancel", close:"Close", description:"Description", date:"Date", amount:"Amount", method:"Payment method", cash:"Cash", bank:"Bank / transfer", note:"Notes", category:"Category", total:"Total", discount:"Discount", advance:"Advance received", remaining:"Remaining balance", invoiceNo:"Invoice number", invoiceDate:"Invoice date", due:"Due", paid:"Paid", print:"Print / PDF", receive:"Receive payment", items:"Invoice items", item:"Item / service", size:"Size", quantity:"Quantity", rate:"Rate", lineTotal:"Line total", addLine:"Add item", subtotal:"Subtotal", status:"Status", payment:"Payment", debit:"Debit", credit:"Credit", balance:"Balance", cashIn:"Cash in", cashOut:"Cash out", openingCash:"Opening cash", cashToday:"Cash today", income:"Income", expenditure:"Expenditure", profit:"Profit / loss", period:"Period", daily:"Daily", monthly:"Monthly", yearly:"Yearly", thisDay:"Selected day", thisMonth:"This month", thisYear:"This year", purchases:"Purchases", rent:"Rent", electricity:"Electricity", salaries:"Salaries", material:"Material", other:"Other", flex:"Flex", vinyl:"Vinyl", ink:"Ink", printingMaterials:"Printing materials", businessName:"Business name", businessMobile:"Business mobile", businessAddress:"Business address", language:"Language", theme:"Appearance", light:"Light", dark:"Dark", backup:"Encrypted backup", createBackup:"Create encrypted backup", restoreBackup:"Restore encrypted backup", syncTitle:"Cloud backup and sync", localOnly:"Data is saved on this device. Live cloud sync is not connected.", cloudPath:"For a private cloud copy, create an encrypted backup and store the file in your cloud drive. Restore it on your other device.", saveSettings:"Save settings", welcome:"Welcome to 3 Dot Graphics", setupText:"Set up your business profile. Your records will stay in this browser on this device.", continue:"Start using 3 Dot Graphics", profile:"Business profile", ledgerAdjust:"Ledger adjustment", adjustType:"Adjustment type", debitAdds:"Debit adds to amount due", creditReduces:"Credit reduces amount due", allCustomers:"All customers", selectCustomer:"Select a customer", noCustomers:"No customers yet", noInvoices:"No invoices yet", noEntries:"No entries yet", noExpenses:"No expenses recorded", noPurchases:"No purchases recorded", noLedger:"No ledger activity", invoiceSaved:"Invoice saved.", customerSaved:"Customer saved.", paymentSaved:"Payment recorded.", expenseSaved:"Expense saved.", purchaseSaved:"Purchase saved.", cashSaved:"Cash entry saved.", adjustmentSaved:"Adjustment saved.", settingsSaved:"Settings saved.", invalid:"Please check the highlighted information.", confirmRestore:"This replaces the records in this browser. Continue?", backupPass:"Choose a backup passphrase (at least 8 characters)", backupPassAgain:"Repeat backup passphrase", restorePass:"Enter the passphrase used for this backup", backupDone:"Encrypted backup created.", restoreDone:"Backup restored.", incorrectPass:"Could not decrypt that backup. Check the passphrase and file.", installHint:"Install 3 Dot Graphics from your browser menu for quick access.", unpaid:"Unpaid", partial:"Partially paid", settled:"Paid", all:"All", customersCount:"customers", bills:"Previous bills", entries:"Entries", amountDue:"Amount due", dashboardSubtitle:"A clear view of your business today.", reportsSubtitle:"Sales, spending and profit for the selected period.", settingsSubtitle:"Business details, appearance and data protection.", cashSubtitle:"Track cash receipts and payments.", expenseSubtitle:"Record operating costs paid by the business.", purchaseSubtitle:"Track purchased flex, vinyl, ink and print supplies.", invoiceSubtitle:"Create professional bills and follow balances.", customerSubtitle:"Contact details and each customer's billing history.", ledgerSubtitle:"Invoices, receipts and balance adjustments.", bank:"Bank", totalSales:"Total sales", netProfit:"Net profit", backupSecure:"Backups are encrypted on this device before you save them.", adjustments:"Adjustments", printTitle:"3 Dot Graphics Invoice", invalidDiscount:"Discount cannot exceed the subtotal.", invalidAdvance:"Advance cannot exceed the invoice total.", noCash:"No cash movement recorded today.", yearly:"Yearly", home:"Home", more:"More"
    },
    ur: {
      dashboard:"ڈیش بورڈ", customers:"گاہک", invoices:"فروخت کے بل", cash:"نقد کتاب", expenses:"اخراجات", purchases:"خریداری", reports:"رپورٹس", settings:"ترتیبات",
      today:"آج", sales:"فروخت", cashBalance:"نقد بیلنس", recoveries:"وصولی", outstanding:"بقایا", expensesToday:"آج کے اخراجات", purchasesToday:"آج کی خریداری", netToday:"آج کا منافع", salesTrend:"فروخت کا جائزہ", last7:"گزشتہ 7 دن", recentActivity:"حالیہ سرگرمی", quickSummary:"آج کا خلاصہ", noActivity:"ابھی کوئی اندراج نہیں۔", newInvoice:"نیا بل", addCustomer:"گاہک شامل کریں", addExpense:"خرچہ شامل کریں", addPurchase:"خریداری شامل کریں", addCash:"نقد اندراج", type:"قسم",
      customer:"گاہک", name:"پورا نام", mobile:"موبائل نمبر", address:"پتہ", email:"ای میل (اختیاری)", search:"تلاش", actions:"عمل", ledger:"کھاتہ", view:"دیکھیں", edit:"ترمیم", save:"محفوظ کریں", cancel:"منسوخ", close:"بند", description:"تفصیل", date:"تاریخ", amount:"رقم", method:"ادائیگی کا طریقہ", cash:"نقد", bank:"بینک / ٹرانسفر", note:"نوٹس", category:"قسم", total:"کل", discount:"رعایت", advance:"وصول شدہ پیشگی", remaining:"باقی رقم", invoiceNo:"بل نمبر", invoiceDate:"بل کی تاریخ", due:"بقایا", paid:"ادا شدہ", print:"پرنٹ / پی ڈی ایف", receive:"رقم وصول کریں", items:"بل کی اشیاء", item:"آئٹم / کام", size:"سائز", quantity:"مقدار", rate:"ریٹ", lineTotal:"رقم", addLine:"آئٹم شامل کریں", subtotal:"ذیلی کل", status:"حالت", payment:"ادائیگی", debit:"ڈیبٹ", credit:"کریڈٹ", balance:"بیلنس", cashIn:"نقد آمد", cashOut:"نقد خرچ", openingCash:"ابتدائی نقد", cashToday:"آج کا نقد", income:"آمدن", expenditure:"خرچ", profit:"منافع / نقصان", period:"مدت", daily:"روزانہ", monthly:"ماہانہ", yearly:"سالانہ", thisDay:"منتخب دن", thisMonth:"اس ماہ", thisYear:"اس سال", purchases:"خریداری", rent:"کرایہ", electricity:"بجلی", salaries:"تنخواہیں", material:"سامان", other:"دیگر", flex:"فلیکس", vinyl:"ونائل", ink:"سیاہی", printingMaterials:"پرنٹنگ کا سامان", businessName:"کاروبار کا نام", businessMobile:"کاروباری موبائل", businessAddress:"کاروباری پتہ", language:"زبان", theme:"ظاہری انداز", light:"روشن", dark:"گہرا", backup:"محفوظ بیک اپ", createBackup:"انکرپٹڈ بیک اپ بنائیں", restoreBackup:"انکرپٹڈ بیک اپ بحال کریں", syncTitle:"کلاؤڈ بیک اپ اور سنک", localOnly:"ڈیٹا اسی ڈیوائس میں محفوظ ہے۔ لائیو کلاؤڈ سنک منسلک نہیں۔", cloudPath:"نجی کلاؤڈ کاپی کے لیے انکرپٹڈ بیک اپ بنائیں اور اپنی کلاؤڈ ڈرائیو میں رکھیں۔ دوسری ڈیوائس پر اسے بحال کریں۔", saveSettings:"ترتیبات محفوظ کریں", welcome:"3 Dot Graphics میں خوش آمدید", setupText:"اپنے کاروبار کی معلومات درج کریں۔ ریکارڈ اسی ڈیوائس کے براؤزر میں محفوظ رہیں گے۔", continue:"3 Dot Graphics شروع کریں", profile:"کاروباری پروفائل", ledgerAdjust:"کھاتے کی ایڈجسٹمنٹ", adjustType:"ایڈجسٹمنٹ کی قسم", debitAdds:"ڈیبٹ واجب رقم بڑھاتا ہے", creditReduces:"کریڈٹ واجب رقم کم کرتا ہے", allCustomers:"تمام گاہک", selectCustomer:"گاہک منتخب کریں", noCustomers:"ابھی کوئی گاہک نہیں", noInvoices:"ابھی کوئی بل نہیں", noEntries:"ابھی کوئی اندراج نہیں", noExpenses:"کوئی خرچہ درج نہیں", noPurchases:"کوئی خریداری درج نہیں", noLedger:"کھاتے میں کوئی سرگرمی نہیں", invoiceSaved:"بل محفوظ ہوگیا۔", customerSaved:"گاہک محفوظ ہوگیا۔", paymentSaved:"ادائیگی درج ہوگئی۔", expenseSaved:"خرچہ محفوظ ہوگیا۔", purchaseSaved:"خریداری محفوظ ہوگئی۔", cashSaved:"نقد اندراج محفوظ ہوگیا۔", adjustmentSaved:"ایڈجسٹمنٹ محفوظ ہوگئی۔", settingsSaved:"ترتیبات محفوظ ہوگئیں۔", invalid:"براہ کرم معلومات درست کریں۔", confirmRestore:"اس براؤزر کے موجودہ ریکارڈ بدل جائیں گے۔ جاری رکھیں؟", backupPass:"بیک اپ کے لیے پاس فریز رکھیں (کم از کم 8 حروف)", backupPassAgain:"پاس فریز دوبارہ درج کریں", restorePass:"اس بیک اپ کا پاس فریز درج کریں", backupDone:"انکرپٹڈ بیک اپ تیار ہے۔", restoreDone:"بیک اپ بحال ہوگیا۔", incorrectPass:"بیک اپ نہیں کھل سکا۔ پاس فریز اور فائل چیک کریں۔", installHint:"آسان رسائی کے لیے براؤزر مینو سے 3 Dot Graphics انسٹال کریں۔", unpaid:"غیر ادا شدہ", partial:"جزوی ادائیگی", settled:"ادا شدہ", all:"تمام", customersCount:"گاہک", bills:"پچھلے بل", entries:"اندراجات", amountDue:"واجب رقم", dashboardSubtitle:"آج کے کاروبار کی صاف تصویر۔", reportsSubtitle:"منتخب مدت کی فروخت، خرچ اور منافع۔", settingsSubtitle:"کاروباری معلومات، انداز اور ڈیٹا کا تحفظ۔", cashSubtitle:"نقد وصولی اور ادائیگیوں کا اندراج۔", expenseSubtitle:"کاروبار کے ادا شدہ اخراجات درج کریں۔", purchaseSubtitle:"فلیکس، ونائل، سیاہی اور سامان کی خریداری درج کریں۔", invoiceSubtitle:"پروفیشنل بل بنائیں اور بقایا دیکھیں۔", customerSubtitle:"رابطہ معلومات اور ہر گاہک کی بلنگ ہسٹری۔", ledgerSubtitle:"بل، وصولیاں اور بیلنس کی ایڈجسٹمنٹ۔", bank:"بینک", totalSales:"کل فروخت", netProfit:"خالص منافع", backupSecure:"بیک اپ محفوظ کرنے سے پہلے اسی ڈیوائس پر انکرپٹ ہوتا ہے۔", adjustments:"ایڈجسٹمنٹ", printTitle:"3 Dot Graphics بل", invalidDiscount:"رعایت ذیلی کل سے زیادہ نہیں ہوسکتی۔", invalidAdvance:"پیشگی بل کی کل رقم سے زیادہ نہیں ہوسکتی۔", noCash:"آج نقد کی کوئی حرکت درج نہیں۔", yearly:"سالانہ", home:"گھر", more:"مزید"
    }
  };
  let db;
  let config;
  let authenticated=false;
  let resettingPassword=false;
  let state = { page:"dashboard", customerId:null, search:"", period:"month", reportDate:todayISO() };
  let toastTimer;
  let pendingBackup = null;

  const EXTRA_T = {
    en:{rate:"Rate (PKR)",size:"Size (ft)",sizeExample:"e.g. 3 × 5 ft",sizeHelp:"Enter width × height in feet, for example 3 × 5 ft. Total = width × height × quantity × rate per sq ft. Leave size blank to charge by the piece.",invalidSize:"Enter size as width × height (for example 3 × 5 ft), or leave it blank.",editInvoice:"Edit invoice",invoiceUpdated:"Invoice updated.",invoiceEditNote:"Edit invoice details or the initial advance. The invoice number and later receipts stay unchanged.",receivedTotal:"Payments received",invalidBelowPaid:"Invoice total cannot be less than payments already received.",invalidAdvance:"Advance plus other payments cannot exceed the invoice total.",editExpense:"Edit expense",editPurchase:"Edit purchase",editCash:"Edit cash entry",expenseUpdated:"Expense updated.",purchaseUpdated:"Purchase updated.",cashUpdated:"Cash entry updated.",expenseItems:"Expense items",multiple:"Multiple",noSearchResults:"No matching records",totalWork:"Total work billed",workOrders:"Work orders",loginTitle:"Administrator login",createLoginTitle:"Create administrator login",loginHelp:"Sign in to access your 3 Dot Graphics records.",createLoginHelp:"Set a password for the single administrator on this device.",username:"Username",administrator:"Administrator",password:"Password",confirmPassword:"Confirm password",signIn:"Sign in",createLogin:"Create login",loginFailed:"Incorrect username or password.",passwordTooShort:"Password must be at least 8 characters.",passwordMismatch:"Passwords do not match.",secureContextNeeded:"Open 3 Dot Graphics through its local server or HTTPS to set up login.",lockApp:"Lock app",changePassword:"Change administrator password",currentPassword:"Current password",newPassword:"New password",passwordChanged:"Password changed.",currentPasswordWrong:"Current password is incorrect.",forgotPassword:"Forgot password?",resetPasswordTitle:"Reset administrator password",resetPasswordHelp:"Choose a new password to unlock this device.",resetPassword:"Reset password",backToLogin:"Back to login",resetNote:"This resets only the app password; your records stay in this browser. Because local data is not encrypted, anyone with access to this browser can reset the password and open the records.",passwordReset:"Password reset. You are signed in.",authNote:"This is a local app lock, not data encryption. Records remain in this browser. Keep a separate encrypted backup."},
    ur:{rate:"ریٹ (PKR)",size:"سائز (فٹ)",sizeExample:"مثلاً 3 × 5 ft",sizeHelp:"چوڑائی × اونچائی فٹ میں لکھیں، مثلاً 3 × 5 ft۔ کل = چوڑائی × اونچائی × مقدار × فی مربع فٹ ریٹ۔ فی آئٹم قیمت کے لیے سائز خالی چھوڑیں۔",invalidSize:"سائز چوڑائی × اونچائی میں لکھیں (مثلاً 3 × 5 ft) یا خالی چھوڑیں۔",editInvoice:"بل میں ترمیم",invoiceUpdated:"بل اپ ڈیٹ ہوگیا۔",invoiceEditNote:"بل کی تفصیلات یا ابتدائی پیشگی رقم میں ترمیم کریں۔ بل نمبر اور بعد کی وصولیاں برقرار رہیں گی۔",receivedTotal:"وصول شدہ ادائیگیاں",invalidBelowPaid:"بل کی کل رقم پہلے سے وصول شدہ ادائیگیوں سے کم نہیں ہوسکتی۔",invalidAdvance:"پیشگی اور دیگر وصول شدہ ادائیگیاں بل کی کل رقم سے زیادہ نہیں ہوسکتیں۔",editExpense:"خرچے میں ترمیم",editPurchase:"خریداری میں ترمیم",editCash:"نقد اندراج میں ترمیم",expenseUpdated:"خرچہ اپ ڈیٹ ہوگیا۔",purchaseUpdated:"خریداری اپ ڈیٹ ہوگئی۔",cashUpdated:"نقد اندراج اپ ڈیٹ ہوگیا۔",expenseItems:"خرچے کی اشیاء",multiple:"متعدد",noSearchResults:"تلاش سے کوئی ریکارڈ نہیں ملا",totalWork:"کل بل شدہ کام",workOrders:"کام کے بل",loginTitle:"ایڈمن لاگ اِن",createLoginTitle:"ایڈمن لاگ اِن بنائیں",loginHelp:"اپنے 3 Dot Graphics ریکارڈ کھولنے کے لیے لاگ اِن کریں۔",createLoginHelp:"اس ڈیوائس کے واحد ایڈمن کے لیے پاس ورڈ بنائیں۔",username:"صارف نام",administrator:"ایڈمن",password:"پاس ورڈ",confirmPassword:"پاس ورڈ کی تصدیق",signIn:"لاگ اِن",createLogin:"لاگ اِن بنائیں",loginFailed:"صارف نام یا پاس ورڈ درست نہیں۔",passwordTooShort:"پاس ورڈ کم از کم 8 حروف کا ہونا چاہیے۔",passwordMismatch:"پاس ورڈ آپس میں نہیں ملتے۔",secureContextNeeded:"لاگ اِن کے لیے 3 Dot Graphics کو لوکل سرور یا HTTPS پر کھولیں۔",lockApp:"ایپ لاک کریں",changePassword:"ایڈمن پاس ورڈ تبدیل کریں",currentPassword:"موجودہ پاس ورڈ",newPassword:"نیا پاس ورڈ",passwordChanged:"پاس ورڈ تبدیل ہوگیا۔",currentPasswordWrong:"موجودہ پاس ورڈ درست نہیں۔",forgotPassword:"پاس ورڈ بھول گئے؟",resetPasswordTitle:"ایڈمن پاس ورڈ ری سیٹ کریں",resetPasswordHelp:"اس ڈیوائس کو کھولنے کے لیے نیا پاس ورڈ بنائیں۔",resetPassword:"پاس ورڈ ری سیٹ کریں",backToLogin:"لاگ اِن پر واپس جائیں",resetNote:"اس سے صرف ایپ کا پاس ورڈ بدلے گا؛ آپ کے ریکارڈ اسی براؤزر میں رہیں گے۔ چونکہ لوکل ڈیٹا انکرپٹ نہیں، اس براؤزر تک رسائی رکھنے والا کوئی بھی شخص پاس ورڈ ری سیٹ کرکے ریکارڈ کھول سکتا ہے۔",passwordReset:"پاس ورڈ ری سیٹ ہوگیا، آپ لاگ اِن ہیں۔",authNote:"یہ صرف ایپ لاک ہے، ڈیٹا انکرپشن نہیں۔ ریکارڈ اسی براؤزر میں رہتے ہیں۔ الگ انکرپٹڈ بیک اپ ضرور رکھیں۔"}
  };
  Object.assign(EXTRA_T.en,{whatsappPdf:"WhatsApp PDF",whatsappPreparing:"Preparing invoice PDF…",whatsappShareHint:"Choose WhatsApp, select the customer, then press Send.",whatsappAttachHint:"Invoice PDF downloaded. Attach it to the WhatsApp chat and press Send.",whatsappError:"Could not prepare the invoice PDF.",whatsappMessage:"Hello, please find invoice {number} for PKR {amount}."});
  Object.assign(EXTRA_T.ur,{whatsappPdf:"واٹس ایپ PDF",whatsappPreparing:"بل کی PDF بن رہی ہے…",whatsappShareHint:"واٹس ایپ منتخب کریں، گاہک چنیں، پھر بھیجیں دبائیں۔",whatsappAttachHint:"بل PDF ڈاؤن لوڈ ہوگئی۔ واٹس ایپ چیٹ میں فائل لگائیں اور بھیجیں دبائیں۔",whatsappError:"بل کی PDF تیار نہیں ہوسکی۔",whatsappMessage:"السلام علیکم، براہ کرم بل نمبر {number} دیکھیں۔ کل رقم PKR {amount} ہے۔"});
  Object.assign(EXTRA_T.en,{height:"Height (ft)",width:"Width (ft)",squareFeet:"Area (sq ft)",sizeHelp:"Enter height and width in feet. Area (sq ft) = height × width; total = area × quantity × rate. Leave both dimensions blank to charge by the piece.",invalidSize:"Enter both height and width in feet, or leave both blank."});
  Object.assign(EXTRA_T.ur,{height:"اونچائی (فٹ)",width:"چوڑائی (فٹ)",squareFeet:"رقبہ (مربع فٹ)",sizeHelp:"اونچائی اور چوڑائی فٹ میں لکھیں۔ رقبہ (مربع فٹ) = اونچائی × چوڑائی؛ کل رقم = رقبہ × مقدار × ریٹ۔ فی عدد قیمت کے لیے دونوں خانے خالی چھوڑیں۔",invalidSize:"اونچائی اور چوڑائی دونوں فٹ میں درج کریں، یا دونوں خالی چھوڑیں۔"});
  function tr(key) {
    const language=config&&config.language==="ur"?"ur":"en";
    return EXTRA_T[language][key]||T[language][key]||T.en[key]||key;
  }
  function todayISO() { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,"0") + "-" + String(d.getDate()).padStart(2,"0"); }
  function uid() { return crypto.randomUUID ? crypto.randomUUID() : "id-" + Date.now() + "-" + Math.random().toString(16).slice(2); }
  function esc(value) { return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) { return ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[ch]; }); }
  function dbOpen() {
    return new Promise(function (resolve, reject) {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = function () {
        const d = request.result;
        STORE_NAMES.forEach(function (name) {
          if (!d.objectStoreNames.contains(name)) d.createObjectStore(name, { keyPath: "id" });
        });
      };
      request.onsuccess = function () { resolve(request.result); };
      request.onerror = function () { reject(request.error); };
    });
  }
  function dbGet(store, id) {
    return new Promise(function (resolve, reject) {
      const req = db.transaction(store, "readonly").objectStore(store).get(id);
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
  }
  function dbAll(store) {
    return new Promise(function (resolve, reject) {
      const req = db.transaction(store, "readonly").objectStore(store).getAll();
      req.onsuccess = function () { resolve(req.result || []); };
      req.onerror = function () { reject(req.error); };
    });
  }
  function dbPut(store, value) {
    return new Promise(function (resolve, reject) {
      const tx = db.transaction(store, "readwrite");
      tx.objectStore(store).put(value);
      tx.oncomplete = function () { resolve(value); };
      tx.onerror = function () { reject(tx.error); };
      tx.onabort = function () { reject(tx.error || new Error("Database transaction failed")); };
    });
  }
  function dbDelete(store, id) {
    return new Promise(function (resolve, reject) {
      const tx = db.transaction(store, "readwrite");
      tx.objectStore(store).delete(id);
      tx.oncomplete = function () { resolve(); };
      tx.onerror = function () { reject(tx.error); };
    });
  }
  function txRequest(request) {
    return new Promise(function (resolve, reject) {
      request.onsuccess = function () { resolve(request.result); };
      request.onerror = function () { reject(request.error); };
    });
  }
  function readFormAmount(form, name) { return Math.round((Number(new FormData(form).get(name)) || 0) * 100); }
  function moneyInputToPaisa(value) { return Math.round((Number(value) || 0) * 100); }
  function paisaToRupees(value) { return (Number(value || 0) / 100).toFixed(2); }
  function money(value) {
    try { return new Intl.NumberFormat(config && config.language === "ur" ? "ur-PK" : "en-PK", { style:"currency", currency:"PKR", maximumFractionDigits:2 }).format((Number(value)||0)/100); }
    catch (_) { return "PKR " + paisaToRupees(value); }
  }
  function dateText(iso) {
    if (!iso) return "—";
    const parts = iso.split("-").map(Number);
    if (parts.length !== 3 || !parts[0]) return esc(iso);
    return new Intl.DateTimeFormat(config && config.language === "ur" ? "ur-PK" : "en-PK", { day:"2-digit", month:"short", year:"numeric" }).format(new Date(parts[0],parts[1]-1,parts[2]));
  }
  function inputValue(paisa) { return paisaToRupees(paisa); }
  function fmtQty(milli) { return (Number(milli || 0) / 1000).toLocaleString(config && config.language === "ur" ? "ur-PK" : "en-PK", { maximumFractionDigits:3 }); }
  function invoicePaid(inv) { return (inv.payments || []).reduce(function (sum, p) { return sum + Number(p.amountPaisa || 0); }, 0); }
  function isAdvancePayment(payment) { return payment&&(payment.type==="advance"||String(payment.note||"").toLowerCase()==="advance"); }
  function invoiceAdvance(inv) { return (inv.payments||[]).find(isAdvancePayment)||null; }
  function invoiceDue(inv) { return Math.max(0, Number(inv.totalPaisa || 0) - invoicePaid(inv)); }
  async function loadConfig() {
    config = await dbGet("config", "main");
    if (!config) config = { id:"main", setupComplete:false, businessName:"", businessMobile:"", businessAddress:"", openingCashPaisa:0, language:"en", theme:"light", nextInvoice:{}, adminName:"Admin", auth:null };
  }
  async function reload() {
    await loadConfig();
    document.body.classList.toggle("dark", config.theme === "dark");
    document.documentElement.lang = config.language === "ur" ? "ur" : "en";
    document.documentElement.dir = config.language === "ur" ? "rtl" : "ltr";
    render();
  }
  function toast(message) {
    const box = document.getElementById("toast");
    box.textContent = message;
    box.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { box.classList.remove("show"); }, 2500);
  }
  function empty(message) { return '<div class="empty"><strong>' + esc(message) + '</strong></div>'; }
  function pageTitle(page) { return tr(page === "ledger" ? "ledger" : page); }
  function shellStart(active) {
    const nav = [
      ["dashboard","⌂"],["customers","♙"],["invoices","▤"],["cash","↔"],["expenses","◉"],["purchases","▣"],["reports","▥"],["settings","⚙"]
    ];
    let navHtml = "";
    nav.forEach(function (item) {
      navHtml += '<button class="nav-item ' + (active === item[0] || (active === "ledger" && item[0] === "customers") ? "active" : "") + '" data-action="nav" data-page="' + item[0] + '"><span class="nav-icon">' + item[1] + '</span><span>' + tr(item[0]) + '</span></button>';
    });
    return '<div class="shell"><aside class="sidebar"><div class="brand"><div class="brand-mark">3</div><div><div class="brand-name">3 Dot Graphics</div><div class="brand-sub">BUSINESS MANAGER</div></div></div><div class="nav-label">WORKSPACE</div><nav class="nav-list">' + navHtml + '</nav><div class="side-bottom"><div class="side-card"><strong>' + esc(config.businessName || "3 Dot Graphics") + '</strong><span>PKR · ' + tr("localOnly").replace(/[.!؟۔]+$/,"") + '</span></div></div></aside><main class="main"><header class="topbar"><div class="top-left"><h1>' + pageTitle(active) + '</h1><p>' + (active === "dashboard" ? tr("dashboardSubtitle") : active === "customers" ? tr("customerSubtitle") : active === "invoices" ? tr("invoiceSubtitle") : active === "cash" ? tr("cashSubtitle") : active === "expenses" ? tr("expenseSubtitle") : active === "purchases" ? tr("purchaseSubtitle") : active === "reports" ? tr("reportsSubtitle") : active === "settings" ? tr("settingsSubtitle") : tr("ledgerSubtitle")) + '</p></div><div class="top-actions"><button class="lang-btn" data-action="toggle-language" aria-label="Toggle language">' + (config.language === "ur" ? "EN" : "اردو") + '</button><button class="icon-btn" data-action="toggle-theme" title="' + tr("theme") + '">' + (config.theme === "dark" ? "☼" : "◐") + '</button><button class="icon-btn" data-action="lock" title="' + tr("lockApp") + '" aria-label="' + tr("lockApp") + '">🔒</button><div class="avatar">A</div></div></header><section class="content">';
  }
  function shellEnd() { return '</section></main></div>'; }
  async function getAll() {
    const result = await Promise.all(["customers","invoices","expenses","purchases","cashEntries","adjustments"].map(dbAll));
    return { customers:result[0], invoices:result[1], expenses:result[2], purchases:result[3], cashEntries:result[4], adjustments:result[5] };
  }
  function startOfMonth(iso) { return iso.slice(0,7) + "-01"; }
  function byDay(items, key, day) { return items.filter(function (item) { return item[key] === day; }); }
  function reportBounds(period, date) {
    if (period === "day") return [date, date];
    if (period === "year") return [date.slice(0,4) + "-01-01", date.slice(0,4) + "-12-31"];
    const year=Number(date.slice(0,4)), month=Number(date.slice(5,7));
    const last=new Date(year,month,0);
    return [date.slice(0,7) + "-01", last.getFullYear()+"-"+String(last.getMonth()+1).padStart(2,"0")+"-"+String(last.getDate()).padStart(2,"0")];
  }
  function inRange(date, bounds) { return date >= bounds[0] && date <= bounds[1]; }
  function collectPayments(invoices) {
    const list = [];
    invoices.forEach(function (inv) { (inv.payments || []).forEach(function (p) { list.push({ date:p.date, amountPaisa:p.amountPaisa, method:p.method || "cash", label:inv.number + " · " + (inv.customerName || ""), source:"payment", description:"Invoice payment" }); }); });
    return list;
  }
  function allCashMovements(data) {
    const list = collectPayments(data.invoices).filter(function (m) { return m.method === "cash"; }).map(function (m) { return Object.assign({},m,{direction:"in"}); });
    data.expenses.forEach(function (x) { if (x.method === "cash") list.push({ date:x.date, amountPaisa:x.amountPaisa, direction:"out", label:x.category, description:x.description || x.category, source:"expense" }); });
    data.purchases.forEach(function (x) { if (x.method === "cash") list.push({ date:x.date, amountPaisa:x.amountPaisa, direction:"out", label:x.category, description:x.description || x.category, source:"purchase" }); });
    data.cashEntries.forEach(function (x) { if (x.method === "cash") list.push({ id:x.id, date:x.date, amountPaisa:x.amountPaisa, direction:x.direction, label:x.category, description:x.description, source:"manual" }); });
    return list.sort(function (a,b) { return (b.date||"").localeCompare(a.date||""); });
  }
  function sumAmount(items, fn) { return items.reduce(function (sum,x) { return sum + Number(fn(x) || 0); },0); }
  function customerBalance(customerId, data) {
    const invoices = data.invoices.filter(function (i) { return i.customerId === customerId; });
    const adjustments = data.adjustments.filter(function (a) { return a.customerId === customerId; });
    return sumAmount(invoices,function (i) { return i.totalPaisa; }) + sumAmount(adjustments,function (a) { return a.type === "debit" ? a.amountPaisa : -a.amountPaisa; }) - sumAmount(invoices,function (i) { return invoicePaid(i); });
  }
  function overviewCards(items) {
    let out = '<div class="metric-grid">';
    items.forEach(function (m) {
      out += '<div class="metric"><div class="metric-top"><span>' + m.label + '</span><span class="metric-icon ' + (m.tone||"") + '">' + m.icon + '</span></div><div class="metric-value">' + m.value + '</div><div class="metric-foot">' + (m.foot || "") + '</div></div>';
    });
    return out + '</div>';
  }
  function dashboardHtml(data) {
    const today = todayISO();
    const salesToday = sumAmount(byDay(data.invoices,"date",today),function (i) { return i.totalPaisa; });
    const todayPayments = collectPayments(data.invoices).filter(function (p) { return p.date === today; });
    const recoveries = sumAmount(todayPayments,function (p) { return p.amountPaisa; });
    const outstanding = sumAmount(data.invoices,function (i) { return invoiceDue(i); }) + sumAmount(data.adjustments.filter(function(a){return a.type==="debit";}),function(a){return a.amountPaisa;}) - sumAmount(data.adjustments.filter(function(a){return a.type==="credit";}),function(a){return a.amountPaisa;});
    const expenses = sumAmount(byDay(data.expenses,"date",today),function(x){return x.amountPaisa;});
    const purchases = sumAmount(byDay(data.purchases,"date",today),function(x){return x.amountPaisa;});
    const movements = allCashMovements(data);
    const dayMovements = movements.filter(function(x){return x.date===today;});
    const ins = sumAmount(dayMovements.filter(function(x){return x.direction==="in";}),function(x){return x.amountPaisa;});
    const outs = sumAmount(dayMovements.filter(function(x){return x.direction==="out";}),function(x){return x.amountPaisa;});
    const cashBalance = Number(config.openingCashPaisa||0) + sumAmount(movements.filter(function(x){return x.direction==="in";}),function(x){return x.amountPaisa;}) - sumAmount(movements.filter(function(x){return x.direction==="out";}),function(x){return x.amountPaisa;});
    let week = [];
    for (let i=6;i>=0;i--) { const d=new Date(); d.setDate(d.getDate()-i); const iso=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); week.push({date:iso,label:new Intl.DateTimeFormat(config.language==="ur"?"ur-PK":"en-PK",{weekday:"short"}).format(d),sales:sumAmount(byDay(data.invoices,"date",iso),function(x){return x.totalPaisa;})}); }
    const max = Math.max(1,...week.map(function(x){return x.sales;}));
    let bars = "";
    week.forEach(function (x) { bars += '<div class="chart-col"><div class="bar" title="' + money(x.sales) + '" style="height:' + Math.max(2,Math.round(x.sales/max*118)) + 'px"></div><span class="chart-date">' + esc(x.label) + '</span></div>'; });
    const recent = movements.slice(0,5);
    let activity = "";
    recent.forEach(function(x){activity += '<div class="activity"><div class="activity-symbol ' + (x.direction==="out"?"out":"") + '">' + (x.direction==="in"?"↙":"↗") + '</div><div class="activity-copy"><strong>' + esc(x.description || x.label) + '</strong><span>' + esc(x.label||"") + ' · ' + dateText(x.date) + '</span></div><div class="activity-amount ' + x.direction + '">' + (x.direction==="in"?"+":"−") + money(x.amountPaisa) + '</div></div>';});
    return '<div class="welcome"><div class="welcome-copy"><h2>' + tr("today") + ', ' + esc(config.businessName || "3 Dot Graphics") + '</h2><p>' + dateText(today) + ' · ' + tr("installHint") + '</p></div><button class="btn btn-primary" data-action="new-invoice">＋ ' + tr("newInvoice") + '</button></div>' +
      overviewCards([{label:tr("sales"),value:money(salesToday),foot:tr("today"),icon:"↗"},{label:tr("cashBalance"),value:money(cashBalance),foot:tr("cashToday")+": "+money(ins-outs),icon:"◉",tone:"blue"},{label:tr("recoveries"),value:money(recoveries),foot:tr("today"),icon:"↙",tone:"amber"},{label:tr("outstanding"),value:money(outstanding),foot:tr("customersCount")+": "+data.customers.length,icon:"!",tone:"rose"}]) +
      '<div class="grid two-col"><section class="panel"><div class="panel-head"><div><h3>' + tr("salesTrend") + '</h3><p>' + tr("last7") + '</p></div><span class="badge">' + tr("sales") + '</span></div><div class="panel-body"><div class="chart">' + bars + '</div><div class="chart-legend"><span><i class="legend-dot"></i>' + tr("sales") + '</span></div></div></section><section class="panel"><div class="panel-head"><div><h3>' + tr("quickSummary") + '</h3><p>' + dateText(today) + '</p></div></div><div class="panel-body"><div class="summary-list"><div class="summary-row"><span>' + tr("cashIn") + '</span><strong>' + money(ins) + '</strong></div><div class="summary-row"><span>' + tr("cashOut") + '</span><strong>' + money(outs) + '</strong></div><div class="summary-row"><span>' + tr("expensesToday") + '</span><strong>' + money(expenses) + '</strong></div><div class="summary-row"><span>' + tr("purchasesToday") + '</span><strong>' + money(purchases) + '</strong></div><div class="summary-row"><span>' + tr("netToday") + '</span><strong>' + money(salesToday-expenses-purchases) + '</strong></div></div></div></section></div>' +
      '<section class="panel"><div class="panel-head"><div><h3>' + tr("recentActivity") + '</h3><p>' + tr("cashSubtitle") + '</p></div><button class="btn btn-secondary btn-small" data-action="nav" data-page="cash">' + tr("view") + '</button></div><div class="panel-body"><div class="activity-list">' + (activity || empty(tr("noActivity"))) + '</div></div></section>';
  }
  function pageHead(title, subtitle, button, action) {
    return '<div class="page-head"><div><h2>' + title + '</h2><p>' + subtitle + '</p></div>' + (button ? '<button class="btn btn-primary" data-action="' + action + '">＋ ' + button + '</button>' : '') + '</div>';
  }
  function customerRows(data) {
    const q = state.search.trim().toLowerCase();
    const filtered = data.customers.filter(function(c){return !q || (c.name+" "+c.mobile+" "+(c.address||"")).toLowerCase().indexOf(q)>=0;});
    if(!filtered.length) return empty(state.search.trim()?tr("noSearchResults"):tr("noCustomers"));
    let rows="";
    filtered.sort(function(a,b){return a.name.localeCompare(b.name);}).forEach(function(c){
      const bills=data.invoices.filter(function(i){return i.customerId===c.id;}).length;
      rows+='<tr><td><strong>'+esc(c.name)+'</strong><span class="subtext">'+esc(c.address||"—")+'</span></td><td class="ltr">'+esc(c.mobile||"—")+'</td><td>'+bills+'</td><td><strong>'+money(customerBalance(c.id,data))+'</strong></td><td><div class="cell-actions"><button class="btn btn-secondary btn-small" data-action="ledger" data-id="'+esc(c.id)+'">'+tr("ledger")+'</button><button class="btn btn-secondary btn-small" data-action="edit-customer" data-id="'+esc(c.id)+'">'+tr("edit")+'</button></div></td></tr>';
    });
    return '<div class="table-wrap"><table><thead><tr><th>'+tr("customer")+'</th><th>'+tr("mobile")+'</th><th>'+tr("bills")+'</th><th>'+tr("balance")+'</th><th>'+tr("actions")+'</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
  }
  function customersPage(data) {
    return pageHead(tr("customers"),tr("customerSubtitle"),tr("addCustomer"),"add-customer")+'<div class="panel"><div class="panel-head"><div><h3>'+data.customers.length+' '+tr("customersCount")+'</h3></div><input class="search" data-search="customers" placeholder="'+tr("search")+'" value="'+esc(state.search)+'"></div>'+customerRows(data)+'</div>';
  }
  function matchesSearch(value) {
    const q=state.search.trim().toLowerCase();
    return !q||String(value||"").toLowerCase().indexOf(q)>=0;
  }
  function invoiceStatus(inv) { return invoiceDue(inv)===0 ? tr("settled") : invoicePaid(inv)>0 ? tr("partial") : tr("unpaid"); }
  function invoiceRows(data, customerId) {
    let list=data.invoices.filter(function(i){return !customerId||i.customerId===customerId;});
    const q=state.search.trim().toLowerCase();
    if(q) list=list.filter(function(i){const itemText=(i.items||[]).map(function(item){return item.description+" "+item.size;}).join(" ");return matchesSearch(i.number+" "+i.customerName+" "+i.customerMobile+" "+i.date+" "+dateText(i.date)+" "+paisaToRupees(i.totalPaisa)+" "+itemText);});
    list.sort(function(a,b){return (b.date||"").localeCompare(a.date||"")||(b.number||"").localeCompare(a.number||"");});
    if(!list.length) return empty(q?tr("noSearchResults"):tr("noInvoices"));
    let rows="";
    list.forEach(function(i){
      const due=invoiceDue(i); const status=invoiceStatus(i);
      rows+='<tr><td><strong>'+esc(i.number)+'</strong><span class="subtext">'+dateText(i.date)+'</span></td><td><strong>'+esc(i.customerName)+'</strong></td><td>'+money(i.totalPaisa)+'</td><td>'+money(invoicePaid(i))+'</td><td><strong>'+money(due)+'</strong></td><td><span class="badge '+(due===0?"":"warn")+'">'+status+'</span></td><td><div class="cell-actions"><button class="btn btn-secondary btn-small" data-action="edit-invoice" data-id="'+esc(i.id)+'">'+tr("edit")+'</button>'+(due>0?'<button class="btn btn-secondary btn-small" data-action="payment" data-id="'+esc(i.id)+'">'+tr("receive")+'</button>':'')+'<button class="btn btn-secondary btn-small" data-action="print" data-id="'+esc(i.id)+'">'+tr("print")+'</button><button class="btn btn-whatsapp btn-small" data-action="whatsapp-invoice" data-id="'+esc(i.id)+'">💬 '+tr("whatsappPdf")+'</button></div></td></tr>';
    });
    return '<div class="table-wrap"><table><thead><tr><th>'+tr("invoiceNo")+'</th><th>'+tr("customer")+'</th><th>'+tr("total")+'</th><th>'+tr("paid")+'</th><th>'+tr("due")+'</th><th>'+tr("status")+'</th><th>'+tr("actions")+'</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
  }
  function invoicesPage(data, customerId) {
    return pageHead(customerId?tr("bills")+" · "+esc((data.customers.find(function(c){return c.id===customerId;})||{}).name||""):tr("invoices"),tr("invoiceSubtitle"),tr("newInvoice"),"new-invoice")+'<div class="panel"><div class="panel-head"><div><h3>'+tr("invoices")+' · '+data.invoices.length+'</h3></div><input class="search" data-search="invoices" placeholder="'+tr("search")+'" value="'+esc(state.search)+'"></div>'+invoiceRows(data,customerId)+'</div>';
  }
  function ledgerPage(data) {
    const customer=data.customers.find(function(c){return c.id===state.customerId;});
    if(!customer) return pageHead(tr("ledger"),tr("ledgerSubtitle"),tr("addCustomer"),"add-customer")+empty(tr("noCustomers"));
    const invoices=data.invoices.filter(function(i){return i.customerId===customer.id;});
    const adjustments=data.adjustments.filter(function(a){return a.customerId===customer.id;});
    let entries=[];
    invoices.forEach(function(i){entries.push({date:i.date,type:"invoice",description:tr("invoiceNo")+" "+i.number,debit:i.totalPaisa,credit:0,invoiceId:i.id});(i.payments||[]).forEach(function(p){entries.push({date:p.date,type:"payment",description:tr("payment")+" · "+i.number+" · "+(p.method==="cash"?tr("cash"):tr("bank")),debit:0,credit:p.amountPaisa});});});
    adjustments.forEach(function(a){entries.push({date:a.date,type:"adjustment",description:a.description||tr("ledgerAdjust"),debit:a.type==="debit"?a.amountPaisa:0,credit:a.type==="credit"?a.amountPaisa:0});});
    entries.sort(function(a,b){return (b.date||"").localeCompare(a.date||"");});
    entries=entries.filter(function(e){return matchesSearch([customer.name,customer.mobile,e.date,dateText(e.date),e.description,e.type,paisaToRupees(e.debit),paisaToRupees(e.credit)].join(" "));});
    let running=customerBalance(customer.id,data);
    let rows="";
    entries.forEach(function(e){
      const actions=e.invoiceId?'<div class="cell-actions"><button class="btn btn-secondary btn-small" data-action="print" data-id="'+esc(e.invoiceId)+'">'+tr("print")+'</button><button class="btn btn-whatsapp btn-small" data-action="whatsapp-invoice" data-id="'+esc(e.invoiceId)+'">💬 '+tr("whatsappPdf")+'</button></div>':"";
      rows+='<tr><td>'+dateText(e.date)+'</td><td>'+esc(e.description)+'</td><td>'+(e.debit?money(e.debit):"—")+'</td><td>'+(e.credit?money(e.credit):"—")+'</td><td><span class="badge '+(e.type==="payment"?"":"neutral")+'">'+esc(e.type==="invoice"?tr("invoiceNo"):e.type==="payment"?tr("payment"):tr("adjustments"))+'</span></td><td>'+actions+'</td></tr>';
    });
    const totalSales=sumAmount(invoices,function(i){return i.totalPaisa;});
    const paid=sumAmount(invoices,function(i){return invoicePaid(i);});
    return pageHead(esc(customer.name),esc(customer.mobile||"")+" · "+esc(customer.address||""),tr("ledgerAdjust"),"ledger-adjust")+'<div class="ledger-balance"><span>'+tr("balance")+' · '+invoices.length+' '+tr("bills")+'</span><strong>'+money(running)+'</strong></div><div class="metric-grid">'+
      '<div class="metric"><div class="metric-top">'+tr("totalWork")+'</div><div class="metric-value">'+money(totalSales)+'</div></div><div class="metric"><div class="metric-top">'+tr("workOrders")+'</div><div class="metric-value">'+invoices.length+'</div></div><div class="metric"><div class="metric-top">'+tr("paid")+'</div><div class="metric-value">'+money(paid)+'</div></div><div class="metric"><div class="metric-top">'+tr("amountDue")+'</div><div class="metric-value">'+money(running)+'</div></div></div>'+
      '<div class="panel"><div class="panel-head"><div><h3>'+tr("ledger")+'</h3><p>'+tr("ledgerSubtitle")+'</p></div><input class="search" data-search="ledger" placeholder="'+tr("search")+'" value="'+esc(state.search)+'"><button class="btn btn-secondary btn-small" data-action="nav" data-page="customers">← '+tr("customers")+'</button></div>'+(rows?'<div class="table-wrap"><table><thead><tr><th>'+tr("date")+'</th><th>'+tr("description")+'</th><th>'+tr("debit")+'</th><th>'+tr("credit")+'</th><th>'+tr("type")+'</th><th>'+tr("actions")+'</th></tr></thead><tbody>'+rows+'</tbody></table></div>':empty(state.search.trim()?tr("noSearchResults"):tr("noLedger")))+'</div>';
  }
  function movementRows(movements) {
    if(!movements.length) return empty(state.search.trim()?tr("noSearchResults"):tr("noEntries"));
    let rows="";
    movements.forEach(function(x){rows+='<tr><td>'+dateText(x.date)+'</td><td><strong>'+esc(x.description||x.label)+'</strong><span class="subtext">'+esc(x.label||"")+'</span></td><td><span class="badge '+(x.direction==="in"?"":"warn")+'">'+(x.direction==="in"?tr("cashIn"):tr("cashOut"))+'</span></td><td>'+esc(x.method==="bank"?tr("bank"):tr("cash"))+'</td><td><strong class="'+(x.direction==="in"?"activity-amount in":"activity-amount out")+'">'+(x.direction==="in"?"+":"−")+money(x.amountPaisa)+'</strong></td><td>'+(x.source==="manual"?'<button class="btn btn-secondary btn-small" data-action="edit-cash-entry" data-id="'+esc(x.id)+'">'+tr("edit")+'</button>':"")+'</td></tr>';});
    return '<div class="table-wrap"><table><thead><tr><th>'+tr("date")+'</th><th>'+tr("description")+'</th><th>'+tr("category")+'</th><th>'+tr("method")+'</th><th>'+tr("amount")+'</th><th>'+tr("actions")+'</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
  }
  function cashPage(data) {
    const all=allCashMovements(data);
    const day=all.filter(function(x){return x.date===todayISO();});
    const ins=sumAmount(day.filter(function(x){return x.direction==="in";}),function(x){return x.amountPaisa;});
    const outs=sumAmount(day.filter(function(x){return x.direction==="out";}),function(x){return x.amountPaisa;});
    const net=Number(config.openingCashPaisa||0)+sumAmount(all.filter(function(x){return x.direction==="in";}),function(x){return x.amountPaisa;})-sumAmount(all.filter(function(x){return x.direction==="out";}),function(x){return x.amountPaisa;});
    const rows=all.map(function(x){return Object.assign({},x,{method:x.method||"cash"});}).filter(function(x){return matchesSearch([x.date,dateText(x.date),x.description,x.label,x.direction==="in"?tr("cashIn"):tr("cashOut"),tr(x.method==="bank"?"bank":"cash"),paisaToRupees(x.amountPaisa)].join(" "));});
    return pageHead(tr("cash"),tr("cashSubtitle"),tr("addCash"),"add-cash")+overviewCards([{label:tr("cashBalance"),value:money(net),icon:"◉"},{label:tr("cashIn")+" · "+tr("today"),value:money(ins),icon:"↙"},{label:tr("cashOut")+" · "+tr("today"),value:money(outs),icon:"↗",tone:"rose"},{label:tr("openingCash"),value:money(config.openingCashPaisa||0),icon:"○",tone:"blue"}])+'<div class="panel"><div class="panel-head"><div><h3>'+tr("entries")+'</h3></div><input class="search" data-search="cash" placeholder="'+tr("search")+'" value="'+esc(state.search)+'"></div>'+movementRows(rows)+'</div>';
  }
  function simpleRows(items, kind) {
    let list=items.filter(function(x){
      if(kind==="expense") {
        const lines=Array.isArray(x.items)&&x.items.length?x.items:[{category:x.category,description:x.description,amountPaisa:x.amountPaisa}];
        return matchesSearch([x.date,dateText(x.date),x.method==="bank"?tr("bank"):tr("cash"),paisaToRupees(x.amountPaisa)].concat(lines.map(function(line){return [categoryText(line.category||"Other"),line.description,paisaToRupees(line.amountPaisa)].join(" ");})).join(" "));
      }
      return matchesSearch([x.date,dateText(x.date),categoryText(x.category),x.description,x.method==="bank"?tr("bank"):tr("cash"),paisaToRupees(x.amountPaisa)].join(" "));
    });
    if(!list.length) return empty(state.search.trim()?tr("noSearchResults"):kind==="expense"?tr("noExpenses"):tr("noPurchases"));
    let rows="";
    list.sort(function(a,b){return (b.date||"").localeCompare(a.date||"");}).forEach(function(x){
      const lines=kind==="expense"?(Array.isArray(x.items)&&x.items.length?x.items:[{category:x.category,description:x.description,amountPaisa:x.amountPaisa}]):[];
      const categories=kind==="expense"?Array.from(new Set(lines.map(function(line){return categoryText(line.category||"Other");}))).join(", "):categoryText(x.category);
      const description=kind==="expense"?lines.map(function(line){return '<div><strong>'+esc(line.description||"—")+'</strong><span class="subtext">'+money(line.amountPaisa)+'</span></div>';}).join(""):esc(x.description||"—");
      rows+='<tr><td>'+dateText(x.date)+'</td><td><span class="badge neutral">'+esc(categories)+'</span></td><td>'+description+'</td><td>'+esc(x.method==="bank"?tr("bank"):tr("cash"))+'</td><td><strong>'+money(x.amountPaisa)+'</strong></td><td><button class="btn btn-secondary btn-small" data-action="edit-entry" data-kind="'+kind+'" data-id="'+esc(x.id)+'">'+tr("edit")+'</button></td></tr>';
    });
    return '<div class="table-wrap"><table><thead><tr><th>'+tr("date")+'</th><th>'+tr("category")+'</th><th>'+tr("description")+'</th><th>'+tr("method")+'</th><th>'+tr("amount")+'</th><th>'+tr("actions")+'</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
  }
  function categoryText(value) {
    const map={Rent:"rent",Electricity:"electricity",Salaries:"salaries",Material:"material",Other:"other",Multiple:"multiple",Flex:"flex",Vinyl:"vinyl",Ink:"ink","Printing materials":"printingMaterials"};
    return map[value]?tr(map[value]):value;
  }
  function expensesPage(data) {
    const total=sumAmount(data.expenses.filter(function(x){return x.date.slice(0,7)===todayISO().slice(0,7);}),function(x){return x.amountPaisa;});
    return pageHead(tr("expenses"),tr("expenseSubtitle"),tr("addExpense"),"add-expense")+overviewCards([{label:tr("expenses")+" · "+tr("thisMonth"),value:money(total),icon:"◉",tone:"rose"},{label:tr("entries"),value:data.expenses.length,icon:"▤"}])+'<div class="panel"><div class="panel-head"><div><h3>'+tr("expenses")+'</h3></div><input class="search" data-search="expenses" placeholder="'+tr("search")+'" value="'+esc(state.search)+'"></div>'+simpleRows(data.expenses,"expense")+'</div>';
  }
  function purchasesPage(data) {
    const total=sumAmount(data.purchases.filter(function(x){return x.date.slice(0,7)===todayISO().slice(0,7);}),function(x){return x.amountPaisa;});
    return pageHead(tr("purchases"),tr("purchaseSubtitle"),tr("addPurchase"),"add-purchase")+overviewCards([{label:tr("purchases")+" · "+tr("thisMonth"),value:money(total),icon:"▣",tone:"blue"},{label:tr("entries"),value:data.purchases.length,icon:"▤"}])+'<div class="panel"><div class="panel-head"><div><h3>'+tr("purchases")+'</h3></div><input class="search" data-search="purchases" placeholder="'+tr("search")+'" value="'+esc(state.search)+'"></div>'+simpleRows(data.purchases,"purchase")+'</div>';
  }
  function reportsPage(data) {
    const bounds=reportBounds(state.period,state.reportDate);
    const invoices=data.invoices.filter(function(i){return inRange(i.date,bounds);});
    const expenses=data.expenses.filter(function(i){return inRange(i.date,bounds);});
    const purchases=data.purchases.filter(function(i){return inRange(i.date,bounds);});
    const payments=collectPayments(data.invoices).filter(function(p){return inRange(p.date,bounds);});
    const sales=sumAmount(invoices,function(i){return i.totalPaisa;});
    const costs=sumAmount(expenses,function(i){return i.amountPaisa;})+sumAmount(purchases,function(i){return i.amountPaisa;});
    const collected=sumAmount(payments,function(p){return p.amountPaisa;});
    return pageHead(tr("reports"),tr("reportsSubtitle"),"", "")+'<div class="report-filters"><select data-report-period><option value="day" '+(state.period==="day"?"selected":"")+'>'+tr("daily")+'</option><option value="month" '+(state.period==="month"?"selected":"")+'>'+tr("monthly")+'</option><option value="year" '+(state.period==="year"?"selected":"")+'>'+tr("yearly")+'</option></select><input type="date" data-report-date value="'+state.reportDate+'"><span class="badge neutral">'+dateText(bounds[0])+' — '+dateText(bounds[1])+'</span></div>'+overviewCards([{label:tr("totalSales"),value:money(sales),icon:"↗"},{label:tr("recoveries"),value:money(collected),icon:"↙",tone:"blue"},{label:tr("expenses"),value:money(sumAmount(expenses,function(i){return i.amountPaisa;})),icon:"◉",tone:"rose"},{label:tr("purchases"),value:money(sumAmount(purchases,function(i){return i.amountPaisa;})),icon:"▣",tone:"amber"}])+'<div class="grid two-col"><section class="panel"><div class="panel-head"><div><h3>'+tr("profit")+'</h3><p>'+dateText(bounds[0])+' — '+dateText(bounds[1])+'</p></div></div><div class="panel-body"><div class="summary-list"><div class="summary-row"><span>'+tr("sales")+'</span><strong>'+money(sales)+'</strong></div><div class="summary-row"><span>'+tr("purchases")+'</span><strong>− '+money(sumAmount(purchases,function(i){return i.amountPaisa;}))+'</strong></div><div class="summary-row"><span>'+tr("expenses")+'</span><strong>− '+money(sumAmount(expenses,function(i){return i.amountPaisa;}))+'</strong></div><div class="summary-row"><span>'+tr("netProfit")+'</span><strong>'+money(sales-costs)+'</strong></div></div></div></section><section class="panel"><div class="panel-head"><div><h3>'+tr("quickSummary")+'</h3></div></div><div class="panel-body"><div class="summary-list"><div class="summary-row"><span>'+tr("invoices")+'</span><strong>'+invoices.length+'</strong></div><div class="summary-row"><span>'+tr("paid")+'</span><strong>'+money(sumAmount(invoices,function(i){return invoicePaid(i);}))+'</strong></div><div class="summary-row"><span>'+tr("due")+'</span><strong>'+money(sumAmount(invoices,function(i){return invoiceDue(i);}))+'</strong></div><div class="summary-row"><span>'+tr("adjustments")+'</span><strong>'+data.adjustments.filter(function(a){return inRange(a.date,bounds);}).length+'</strong></div></div></div></section></div>';
  }
  function settingsPage() {
    return pageHead(tr("settings"),tr("settingsSubtitle"),"", "")+'<div class="grid two-col"><section class="panel"><div class="panel-head"><div><h3>'+tr("profile")+'</h3><p>3 Dot Graphics · PKR</p></div></div><div class="panel-body"><form data-form="settings"><div class="form-grid"><div class="field full"><label>'+tr("businessName")+'</label><input name="businessName" required value="'+esc(config.businessName||"")+'"></div><div class="field"><label>'+tr("businessMobile")+'</label><input name="businessMobile" value="'+esc(config.businessMobile||"")+'"></div><div class="field"><label>'+tr("openingCash")+' (PKR)</label><input name="openingCash" type="number" min="0" step="0.01" value="'+inputValue(config.openingCashPaisa||0)+'"></div><div class="field full"><label>'+tr("businessAddress")+'</label><textarea name="businessAddress">'+esc(config.businessAddress||"")+'</textarea></div><div class="field"><label>'+tr("language")+'</label><select name="language"><option value="en" '+(config.language==="en"?"selected":"")+'>English</option><option value="ur" '+(config.language==="ur"?"selected":"")+'>اردو</option></select></div><div class="field"><label>'+tr("theme")+'</label><select name="theme"><option value="light" '+(config.theme==="light"?"selected":"")+'>'+tr("light")+'</option><option value="dark" '+(config.theme==="dark"?"selected":"")+'>'+tr("dark")+'</option></select></div></div><button class="btn btn-primary" type="submit">'+tr("saveSettings")+'</button><button class="btn btn-secondary" type="button" data-action="lock" style="margin-inline-start:8px">🔒 '+tr("lockApp")+'</button></form></div></section><section class="panel"><div class="panel-head"><div><h3>'+tr("changePassword")+'</h3></div></div><div class="panel-body"><form data-form="change-password"><div class="field"><label>'+tr("currentPassword")+'</label><input name="currentPassword" type="password" autocomplete="current-password" required></div><div class="field"><label>'+tr("newPassword")+'</label><input name="newPassword" type="password" minlength="8" autocomplete="new-password" required></div><div class="field"><label>'+tr("confirmPassword")+'</label><input name="confirmPassword" type="password" minlength="8" autocomplete="new-password" required></div><button class="btn btn-primary" type="submit">'+tr("changePassword")+'</button></form></div></section><section class="panel"><div class="panel-head"><div><h3>'+tr("backup")+'</h3><p>'+tr("backupSecure")+'</p></div></div><div class="panel-body"><div class="notice">'+tr("localOnly")+'</div><p style="font-size:11px;line-height:1.6;color:var(--muted)">'+tr("cloudPath")+'</p><div class="toolbar"><button class="btn btn-primary" data-action="backup">'+tr("createBackup")+'</button><button class="btn btn-secondary" data-action="restore">'+tr("restoreBackup")+'</button><input id="backup-file" class="hidden" type="file" accept=".flexpro,.json,application/json"></div></div></section></div>';
  }
  async function render() {
    if (!authenticated) { renderAuth(); return; }
    if (!config.setupComplete) { renderSetup(); return; }
    const data=await getAll();
    let page="";
    switch(state.page) {
      case "customers": page=customersPage(data); break;
      case "ledger": page=ledgerPage(data); break;
      case "invoices": page=invoicesPage(data); break;
      case "cash": page=cashPage(data); break;
      case "expenses": page=expensesPage(data); break;
      case "purchases": page=purchasesPage(data); break;
      case "reports": page=reportsPage(data); break;
      case "settings": page=settingsPage(); break;
      default: state.page="dashboard"; page=dashboardHtml(data);
    }
    document.getElementById("app").innerHTML=shellStart(state.page)+page+shellEnd();
  }
  function renderAuth() {
    document.documentElement.lang=config.language==="ur"?"ur":"en";
    document.documentElement.dir=config.language==="ur"?"rtl":"ltr";
    document.body.classList.toggle("dark",config.theme==="dark");
    const creating=!(config.auth&&config.auth.salt&&config.auth.verifier);
    if(creating) resettingPassword=false;
    const resetting=!creating&&resettingPassword;
    const title=creating?tr("createLoginTitle"):resetting?tr("resetPasswordTitle"):tr("loginTitle");
    const help=creating?tr("createLoginHelp"):resetting?tr("resetPasswordHelp"):tr("loginHelp");
    const passwordField='<div class="field"><label>'+tr("password")+'</label><input name="password" type="password" minlength="8" autocomplete="'+(creating||resetting?"new-password":"current-password")+'" required autofocus></div>';
    const confirmField='<div class="field"><label>'+tr("confirmPassword")+'</label><input name="confirmPassword" type="password" minlength="8" autocomplete="new-password" required></div>';
    const userField='<div class="field"><label>'+tr("username")+'</label><input name="username" autocomplete="username" value="admin" readonly></div>';
    let form="",actions="",notice=tr("authNote");
    if(creating) form='<form data-form="auth-setup">'+userField+passwordField+confirmField+'<button class="btn btn-primary" type="submit" style="width:100%">'+tr("createLogin")+'</button></form>';
    else if(resetting) {
      notice=tr("resetNote");
      form='<form data-form="password-reset">'+passwordField+confirmField+'<button class="btn btn-primary" type="submit" style="width:100%">'+tr("resetPassword")+'</button></form>';
      actions='<button class="btn btn-secondary" type="button" data-action="cancel-password-reset" style="width:100%;margin-top:9px">'+tr("backToLogin")+'</button>';
    } else {
      form='<form data-form="login">'+userField+passwordField+'<button class="btn btn-primary" type="submit" style="width:100%">'+tr("signIn")+'</button></form>';
      actions='<button class="btn btn-secondary" type="button" data-action="forgot-password" style="width:100%;margin-top:9px">'+tr("forgotPassword")+'</button>';
    }
    document.getElementById("app").innerHTML='<main class="onboarding"><section class="onboard-card"><div class="onboard-brand"><div class="brand-mark">3</div><div><div class="brand-name" style="color:var(--ink)">3 Dot Graphics</div><div class="brand-sub" style="color:var(--muted)">BUSINESS MANAGER</div></div></div><h1>'+title+'</h1><p>'+help+'</p>'+form+actions+'<div class="notice" style="margin-top:16px">'+notice+'</div></section></main>';
  }
  async function passwordVerifier(password,auth) {
    if(!window.crypto||!crypto.subtle||!crypto.getRandomValues) throw new Error(tr("secureContextNeeded"));
    const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(password),"PBKDF2",false,["deriveBits"]);
    const bits=await crypto.subtle.deriveBits({name:"PBKDF2",salt:base64ToBytes(auth.salt),iterations:Number(auth.iterations)||310000,hash:"SHA-256"},key,256);
    return bytesToBase64(new Uint8Array(bits));
  }
  function sameSecret(left,right) {
    const a=String(left||""),b=String(right||"");let mismatch=a.length^b.length;
    for(let i=0;i<Math.max(a.length,b.length);i++) mismatch|=(a.charCodeAt(i)||0)^(b.charCodeAt(i)||0);
    return mismatch===0;
  }
  async function makeAdminAuth(password) {
    if(!window.crypto||!crypto.subtle||!crypto.getRandomValues) throw new Error(tr("secureContextNeeded"));
    const salt=crypto.getRandomValues(new Uint8Array(16));
    const auth={username:"admin",salt:bytesToBase64(salt),iterations:310000};
    auth.verifier=await passwordVerifier(password,auth);
    return auth;
  }
  function renderSetup() {
    document.documentElement.lang=config.language==="ur"?"ur":"en";
    document.documentElement.dir=config.language==="ur"?"rtl":"ltr";
    document.body.classList.toggle("dark",config.theme==="dark");
    document.getElementById("app").innerHTML='<main class="onboarding"><section class="onboard-card"><div class="onboard-brand"><div class="brand-mark">3</div><div><div class="brand-name" style="color:var(--ink)">3 Dot Graphics</div><div class="brand-sub" style="color:var(--muted)">BUSINESS MANAGER</div></div></div><h1>'+tr("welcome")+'</h1><p>'+tr("setupText")+'</p><form data-form="setup"><div class="field"><label>'+tr("businessName")+'</label><input name="businessName" required autofocus></div><div class="field"><label>'+tr("businessMobile")+'</label><input name="businessMobile" inputmode="tel"></div><div class="field"><label>'+tr("businessAddress")+'</label><textarea name="businessAddress"></textarea></div><div class="field"><label>'+tr("openingCash")+' (PKR)</label><input name="openingCash" type="number" min="0" step="0.01" value="0"></div><div class="form-grid"><div class="field"><label>'+tr("language")+'</label><select name="language"><option value="en">English</option><option value="ur">اردو</option></select></div><div class="field"><label>'+tr("theme")+'</label><select name="theme"><option value="light">'+tr("light")+'</option><option value="dark">'+tr("dark")+'</option></select></div></div><button class="btn btn-primary" type="submit" style="width:100%;margin-top:4px">'+tr("continue")+'</button></form></section></main>';
  }
  function modal(title, body, opts) {
    const o=opts||{};
    document.querySelector(".modal-backdrop")?.remove();
    document.body.insertAdjacentHTML("beforeend",'<div class="modal-backdrop" data-action="backdrop"><section class="modal '+(o.wide?"wide":"")+'" role="dialog" aria-modal="true"><div class="modal-head"><h2>'+title+'</h2><button class="close-btn" data-action="close-modal" aria-label="'+tr("close")+'">×</button></div><div class="modal-body">'+body+'</div>'+(o.foot?'<div class="modal-foot">'+o.foot+'</div>':'')+'</section></div>');
  }
  function customerForm(customer) {
    const c=customer||{};
    const title=c.id?tr("edit")+" · "+tr("customer"):tr("addCustomer");
    const body='<form data-form="customer" id="customer-form"><input type="hidden" name="id" value="'+esc(c.id||"")+'"><div class="field"><label>'+tr("name")+'</label><input name="name" required value="'+esc(c.name||"")+'"></div><div class="field"><label>'+tr("mobile")+'</label><input name="mobile" inputmode="tel" value="'+esc(c.mobile||"")+'"></div><div class="field"><label>'+tr("address")+'</label><textarea name="address">'+esc(c.address||"")+'</textarea></div><div class="modal-foot"><button class="btn btn-secondary" type="button" data-action="close-modal">'+tr("cancel")+'</button><button class="btn btn-primary" type="submit">'+tr("save")+'</button></div></form>';
    modal(title,body);
  }
  function methodOptions(selected) {
    return '<option value="cash" '+((selected||"cash")==="cash"?"selected":"")+'>'+tr("cash")+'</option><option value="bank" '+(selected==="bank"?"selected":"")+'>'+tr("bank")+'</option>';
  }
  function invoiceForm(data, invoice) {
    if(!data.customers.length){ toast(tr("noCustomers")); state.page="customers"; render(); return; }
    const editing=!!invoice;
    let options='<option value="">'+tr("selectCustomer")+'</option>';
    data.customers.sort(function(a,b){return a.name.localeCompare(b.name);}).forEach(function(c){options+='<option value="'+esc(c.id)+'" '+(editing&&c.id===invoice.customerId?"selected":"")+'>'+esc(c.name)+' · '+esc(c.mobile||"")+'</option>';});
    const lines=editing&&invoice.items&&invoice.items.length?invoice.items.map(function(item){return invoiceLine(item);}).join(""):invoiceLine(null);
    const editNote=editing?'<div class="notice">'+tr("invoiceEditNote")+'<br><strong>'+tr("receivedTotal")+': '+money(invoicePaid(invoice))+'</strong></div>':'';
    const oldAdvance=editing?invoiceAdvance(invoice):null;
    const paymentFields='<div class="field"><label>'+tr("advance")+' (PKR)</label><input name="advance" type="number" min="0" step="0.01" value="'+(oldAdvance?paisaToRupees(oldAdvance.amountPaisa):"0")+'"></div><div class="field"><label>'+tr("method")+'</label><select name="method">'+methodOptions(oldAdvance&&oldAdvance.method||"cash")+'</select></div>';
    let body='<form data-form="invoice" id="invoice-form" data-invoice-id="'+esc(invoice&&invoice.id||"")+'"><div class="form-grid"><div class="field"><label>'+tr("customer")+'</label><select name="customerId" required>'+options+'</select></div><div class="field"><label>'+tr("invoiceDate")+'</label><input name="date" type="date" required value="'+esc(invoice&&invoice.date||todayISO())+'"></div></div>'+editNote+'<label style="font-size:11px;font-weight:600;color:var(--muted)">'+tr("items")+'</label><div class="table-wrap"><table class="line-items"><thead><tr><th>'+tr("item")+'</th><th>'+tr("size")+'</th><th>'+tr("quantity")+'</th><th>'+tr("rate")+'</th><th>'+tr("lineTotal")+'</th><th></th></tr></thead><tbody id="invoice-lines">'+lines+'</tbody></table></div><button type="button" class="btn btn-secondary btn-small" data-action="add-line">＋ '+tr("addLine")+'</button><div class="form-grid" style="margin-top:14px"><div class="field"><label>'+tr("discount")+' (PKR)</label><input name="discount" type="number" min="0" step="0.01" value="'+paisaToRupees(invoice&&invoice.discountPaisa||0)+'"></div>'+paymentFields+'</div><div class="totals-box"><span>'+tr("subtotal")+'</span><strong data-subtotal>PKR 0.00</strong><span>'+tr("discount")+'</span><strong data-discount>PKR 0.00</strong><span class="total-grand">'+tr("total")+'</span><strong class="total-grand" data-grand>PKR 0.00</strong></div><div class="modal-foot"><button class="btn btn-secondary" type="button" data-action="close-modal">'+tr("cancel")+'</button><button class="btn btn-primary" type="submit">'+tr("save")+' · '+tr("invoices")+'</button></div></form>';
    const oldLineHeaders='<tr><th>'+tr("item")+'</th><th>'+tr("size")+'</th><th>'+tr("quantity")+'</th><th>'+tr("rate")+'</th><th>'+tr("lineTotal")+'</th><th></th></tr>';
    const newLineHeaders='<tr><th>'+tr("item")+'</th><th>'+tr("height")+'</th><th>'+tr("width")+'</th><th>'+tr("squareFeet")+'</th><th>'+tr("quantity")+'</th><th>'+tr("rate")+'</th><th>'+tr("lineTotal")+'</th><th></th></tr>';
    body=body.replace(oldLineHeaders,newLineHeaders);
    const totalSummary='<span class="total-grand">'+tr("total")+'</span><strong class="total-grand" data-grand>PKR 0.00</strong>';
    body=body.replace(totalSummary,totalSummary+'<span>'+tr("advance")+'</span><strong data-advance>PKR 0.00</strong>');
    modal(editing?tr("editInvoice")+" · "+esc(invoice.number):tr("newInvoice"),body,{wide:true});
    const table=document.querySelector(".line-items");
    if(table) table.closest(".table-wrap").insertAdjacentHTML("beforebegin",'<div class="notice">'+tr("sizeHelp")+'</div>');
    recalcInvoice();
  }
  function invoiceLine(item) {
    const i=item||{};
    const qty=i.qtyMilli?Number(i.qtyMilli)/1000:(i.quantity||1);
    const rate=typeof i.ratePaisa==="number"?paisaToRupees(i.ratePaisa):paisaToRupees(moneyInputToPaisa(i.rate||0));
    const dimensions=invoiceItemDimensions(i);
    const height=dimensions?dimensions.heightFt:"",width=dimensions?dimensions.widthFt:"";
    return '<tr><td><input name="itemDesc" required placeholder="'+tr("item")+'" value="'+esc(i.description||"")+'"></td><td><input name="itemHeight" type="number" min="0.01" step="any" placeholder="'+tr("height")+'" value="'+esc(height)+'" aria-label="'+tr("height")+'"></td><td><input name="itemWidth" type="number" min="0.01" step="any" placeholder="'+tr("width")+'" value="'+esc(width)+'" aria-label="'+tr("width")+'"></td><td class="area-sqft">'+(dimensions?fmtArea(dimensions.areaSqFt):"—")+'</td><td><input name="itemQty" required type="number" min="0.001" step="0.001" value="'+esc(qty)+'"></td><td><input name="itemRate" required type="number" min="0" step="0.01" value="'+esc(rate)+'" aria-label="'+tr("rate")+'"></td><td class="line-total">'+money(i.lineTotalPaisa||0)+'</td><td><button type="button" class="close-btn" data-action="remove-line" aria-label="Remove">×</button></td></tr>';
  }
  function sizeDimensions(size) {
    const value=String(size||"").trim();
    if(!value) return null;
    const match=value.match(/^\s*(\d+(?:\.\d+)?)\s*(ft|feet|foot|in|inch|inches|cm|mm|m)?\s*[x×*]\s*(\d+(?:\.\d+)?)\s*(ft|feet|foot|in|inch|inches|cm|mm|m)?\s*$/i);
    if(!match) return null;
    const normalize=function(unit){if(!unit)return ""; unit=unit.toLowerCase(); return unit==="feet"||unit==="foot"?"ft":unit==="inch"||unit==="inches"?"in":unit;};
    const first=normalize(match[2]), second=normalize(match[4]);
    if(first&&second&&first!==second) return null;
    const unit=first||second||"ft";
    const width=Number(match[1]), height=Number(match[3]);
    if(!Number.isFinite(width)||!Number.isFinite(height)||width<=0||height<=0) return null;
    const toFeet=unit==="ft"?1:unit==="in"?1/12:unit==="cm"?1/30.48:unit==="mm"?1/304.8:unit==="m"?3.280839895:NaN;
    const widthFt=width*toFeet,heightFt=height*toFeet,areaSqFt=widthFt*heightFt;
    if(!Number.isFinite(areaSqFt)||areaSqFt<=0||areaSqFt>1000000) return null;
    return {heightFt:heightFt,widthFt:widthFt,areaSqFt:areaSqFt,unit:unit};
  }
  function invoiceItemDimensions(item) {
    if(item&&Number(item.heightFt)>0&&Number(item.widthFt)>0) return {heightFt:Number(item.heightFt),widthFt:Number(item.widthFt),areaSqFt:Number(item.areaSqFt)||Number(item.heightFt)*Number(item.widthFt)};
    return sizeDimensions(item&&item.size);
  }
  function fmtArea(value) {
    return Number(value||0).toLocaleString(config&&config.language==="ur"?"ur-PK":"en-PK",{maximumFractionDigits:4});
  }
  function lineAmountPaisa(qtyMilli,ratePaisa,areaSqFt) {
    return Math.round(Number(qtyMilli)*Number(ratePaisa)*Number(areaSqFt)/1000);
  }
  function recalcInvoice() {
    const form=document.getElementById("invoice-form"); if(!form) return;
    let subtotal=0, hasInvalidSize=false;
    form.querySelectorAll("#invoice-lines tr").forEach(function(row){
      const qty=Math.round((Number(row.querySelector('[name="itemQty"]').value)||0)*1000);
      const rate=moneyInputToPaisa(row.querySelector('[name="itemRate"]').value);
      const heightText=row.querySelector('[name="itemHeight"]').value.trim();
      const widthText=row.querySelector('[name="itemWidth"]').value.trim();
      const hasDimensions=heightText!==""||widthText!=="";
      const height=Number(heightText),width=Number(widthText),areaSqFt=hasDimensions?height*width:1;
      const validDimensions=!hasDimensions||(heightText!==""&&widthText!==""&&Number.isFinite(height)&&Number.isFinite(width)&&height>0&&width>0&&Number.isFinite(areaSqFt)&&areaSqFt<=1000000);
      const totalCell=row.querySelector(".line-total");
      const areaCell=row.querySelector(".area-sqft");
      if(areaCell) areaCell.textContent=validDimensions&&hasDimensions?fmtArea(areaSqFt):"—";
      if(!validDimensions){hasInvalidSize=true;totalCell.textContent=tr("invalidSize");totalCell.classList.add("invalid-size");return;}
      const line=lineAmountPaisa(qty,rate,areaSqFt);
      subtotal+=line; totalCell.textContent=money(line); totalCell.classList.remove("invalid-size");
    });
    const discount=moneyInputToPaisa(form.elements.discount.value);
    form.querySelector("[data-subtotal]").textContent=money(subtotal);
    form.querySelector("[data-discount]").textContent=money(discount);
    form.querySelector("[data-grand]").textContent=money(Math.max(0,subtotal-discount));
    form.querySelector("[data-advance]").textContent=money(moneyInputToPaisa(form.elements.advance.value));
    form.dataset.invalidSize=hasInvalidSize?"true":"false";
  }
  async function saveInvoice(form) {
    const fd=new FormData(form);
    const invoiceId=String(form.dataset.invoiceId||"");
    const customer=await dbGet("customers",fd.get("customerId"));
    if(!customer) throw new Error(tr("invalid"));
    const items=[];
    form.querySelectorAll("#invoice-lines tr").forEach(function(row){
      const desc=row.querySelector('[name="itemDesc"]').value.trim();
      const heightText=row.querySelector('[name="itemHeight"]').value.trim();
      const widthText=row.querySelector('[name="itemWidth"]').value.trim();
      const hasDimensions=heightText!==""||widthText!=="";
      const height=Number(heightText),width=Number(widthText),areaSqFt=hasDimensions?height*width:0;
      const qtyMilli=Math.round(Number(row.querySelector('[name="itemQty"]').value)*1000);
      const ratePaisa=moneyInputToPaisa(row.querySelector('[name="itemRate"]').value);
      if(hasDimensions&&(heightText===""||widthText===""||!Number.isFinite(height)||!Number.isFinite(width)||height<=0||width<=0||!Number.isFinite(areaSqFt)||areaSqFt>1000000)) throw new Error(tr("invalidSize"));
      if(!desc||!Number.isFinite(qtyMilli)||qtyMilli<=0||!Number.isFinite(ratePaisa)||ratePaisa<0) throw new Error(tr("invalid"));
      const lineTotalPaisa=lineAmountPaisa(qtyMilli,ratePaisa,hasDimensions?areaSqFt:1);
      if(!Number.isSafeInteger(lineTotalPaisa)||lineTotalPaisa<0) throw new Error(tr("invalid"));
      const canonicalSize=hasDimensions?String(width)+" × "+String(height)+" ft":"";
      items.push({description:desc,size:canonicalSize,heightFt:hasDimensions?height:0,widthFt:hasDimensions?width:0,areaSqFt:areaSqFt,qtyMilli:qtyMilli,ratePaisa:ratePaisa,lineTotalPaisa:lineTotalPaisa});
    });
    if(!items.length) throw new Error(tr("invalid"));
    const subtotal=sumAmount(items,function(i){return i.lineTotalPaisa;});
    const discount=moneyInputToPaisa(fd.get("discount"));
    if(discount>subtotal) throw new Error(tr("invalidDiscount"));
    const total=subtotal-discount;
    const advance=moneyInputToPaisa(fd.get("advance"));
    const advanceMethod=String(fd.get("method")||"cash");
    if(!Number.isSafeInteger(advance)||advance<0) throw new Error(tr("invalid"));
    const date=String(fd.get("date")||todayISO());
    const details={date:date,customerId:customer.id,customerName:customer.name,customerMobile:customer.mobile||"",customerAddress:customer.address||"",items:items,subtotalPaisa:subtotal,discountPaisa:discount,totalPaisa:total};
    if(invoiceId) {
      let failure=null,saved=null;
      return new Promise(function(resolve,reject){
        const tx=db.transaction("invoices","readwrite");
        const store=tx.objectStore("invoices");
        const req=store.get(invoiceId);
        req.onsuccess=function(){
          const current=req.result;
          if(!current){failure=new Error(tr("invalid"));tx.abort();return;}
          const oldPayments=current.payments||[];
          const advanceIndex=oldPayments.findIndex(isAdvancePayment);
          const otherPaid=sumAmount(oldPayments.filter(function(payment,index){return index!==advanceIndex;}),function(payment){return payment.amountPaisa;});
          if(total<otherPaid){failure=new Error(tr("invalidBelowPaid"));tx.abort();return;}
          if(advance>total-otherPaid){failure=new Error(tr("invalidAdvance"));tx.abort();return;}
          const payments=oldPayments.slice();
          if(advanceIndex>=0) {
            if(advance>0) payments[advanceIndex]=Object.assign({},payments[advanceIndex],{amountPaisa:advance,method:advanceMethod,type:"advance",note:"Advance"});
            else payments.splice(advanceIndex,1);
          } else if(advance>0) payments.unshift({id:uid(),date:date,amountPaisa:advance,method:advanceMethod,type:"advance",note:"Advance"});
          saved=Object.assign({},current,details,{payments:payments,updatedAt:new Date().toISOString()});
          store.put(saved);
        };
        tx.oncomplete=function(){resolve(saved);};
        tx.onerror=function(){reject(failure||tx.error||new Error("Database transaction failed"));};
        tx.onabort=function(){reject(failure||tx.error||new Error("Database transaction failed"));};
      });
    }
    if(advance>total) throw new Error(tr("invalidAdvance"));
    const year=date.slice(0,4);
    return new Promise(function(resolve,reject){
      const tx=db.transaction(["invoices","config"],"readwrite");
      const invoices=tx.objectStore("invoices");
      const settings=tx.objectStore("config");
      let created;
      const req=settings.get("main");
      req.onsuccess=function(){
        const latest=req.result||config;
        const counters=Object.assign({},latest.nextInvoice||{});
        const seq=Number(counters[year]||0)+1;
        const number="FP-"+year+"-"+String(seq).padStart(4,"0");
        counters[year]=seq;
        created=Object.assign({id:uid(),number:number,createdAt:new Date().toISOString()},details,{payments:advance?[{id:uid(),date:date,amountPaisa:advance,method:advanceMethod,type:"advance",note:"Advance"}]:[]});
        latest.nextInvoice=counters; settings.put(latest); invoices.add(created);
      };
      tx.oncomplete=function(){resolve(created);};
      tx.onerror=function(){reject(tx.error||new Error("Database transaction failed"));};
      tx.onabort=function(){reject(tx.error||new Error("Database transaction failed"));};
    });
  }
  async function paymentForm(invoiceId) {
    const data=await getAll();
    let inv=invoiceId?data.invoices.find(function(i){return i.id===invoiceId;}):null;
    if(!inv) inv=data.invoices.find(function(i){return invoiceDue(i)>0;});
    if(!inv){toast(tr("noInvoices"));return;}
    const opts=data.invoices.filter(function(i){return invoiceDue(i)>0;}).map(function(i){return '<option value="'+esc(i.id)+'" '+(i.id===inv.id?"selected":"")+'>'+esc(i.number)+' · '+esc(i.customerName)+' · '+money(invoiceDue(i))+'</option>';}).join("");
    const options=data.invoices.filter(function(i){return invoiceDue(i)>0;}).map(function(i){return '<option data-due="'+paisaToRupees(invoiceDue(i))+'" value="'+esc(i.id)+'" '+(i.id===inv.id?"selected":"")+'>'+esc(i.number)+' · '+esc(i.customerName)+' · '+money(invoiceDue(i))+'</option>';}).join("");
    modal(tr("receive"),'<form data-form="payment"><div class="field"><label>'+tr("invoiceNo")+'</label><select name="invoiceId" id="payment-invoice" required>'+options+'</select></div><div class="field"><label>'+tr("date")+'</label><input name="date" type="date" required value="'+todayISO()+'"></div><div class="field"><label>'+tr("amount")+' (PKR)</label><input name="amount" id="payment-amount" type="number" min="0.01" max="'+paisaToRupees(invoiceDue(inv))+'" step="0.01" required value="'+paisaToRupees(invoiceDue(inv))+'"></div><div class="field"><label>'+tr("method")+'</label><select name="method">'+methodOptions("cash")+'</select></div><div class="field"><label>'+tr("note")+'</label><input name="note"></div><div class="modal-foot"><button class="btn btn-secondary" type="button" data-action="close-modal">'+tr("cancel")+'</button><button class="btn btn-primary" type="submit">'+tr("receive")+'</button></div></form>');
  }
  async function savePayment(form) {
    const fd=new FormData(form); const amount=moneyInputToPaisa(fd.get("amount"));
    return new Promise(function(resolve,reject){
      const tx=db.transaction("invoices","readwrite"); const store=tx.objectStore("invoices");
      const req=store.get(fd.get("invoiceId"));
      req.onsuccess=function(){
        const inv=req.result;
        if(!inv||amount<=0||amount>invoiceDue(inv)){tx.abort();reject(new Error(tr("invalid")));return;}
        inv.payments=inv.payments||[]; inv.payments.push({id:uid(),date:String(fd.get("date")||todayISO()),amountPaisa:amount,method:String(fd.get("method")||"cash"),note:String(fd.get("note")||"")}); store.put(inv);
      };
      tx.oncomplete=function(){resolve();};
      tx.onerror=function(){reject(tx.error||new Error("Database transaction failed"));};
      tx.onabort=function(){reject(tx.error||new Error(tr("invalid")));};
    });
  }
  function categorySelect(kind, selected) {
    const choices=kind==="expense"?[["Rent","rent"],["Electricity","electricity"],["Salaries","salaries"],["Material","material"],["Other","other"]]:[["Flex","flex"],["Vinyl","vinyl"],["Ink","ink"],["Printing materials","printingMaterials"],["Other","other"]];
    return choices.map(function(c){return '<option value="'+c[0]+'" '+(c[0]===selected?"selected":"")+'>'+tr(c[1])+'</option>';}).join("");
  }
  function expenseLine(item) {
    const x=item||{};
    return '<tr><td><select name="expenseCategory">'+categorySelect("expense",x.category||"Rent")+'</select></td><td><input name="expenseDescription" required placeholder="'+tr("description")+'" value="'+esc(x.description||"")+'"></td><td><input name="expenseAmount" required type="number" min="0.01" step="0.01" value="'+(item?paisaToRupees(x.amountPaisa):"")+'"></td><td><button type="button" class="close-btn" data-action="remove-expense-line" aria-label="Remove">×</button></td></tr>';
  }
  function recalcExpenseForm() {
    const form=document.getElementById("expense-form"); if(!form)return;
    let total=0;
    form.querySelectorAll("#expense-lines tr").forEach(function(row){total+=moneyInputToPaisa(row.querySelector('[name="expenseAmount"]').value);});
    const output=form.querySelector("[data-expense-total]"); if(output) output.textContent=money(total);
  }
  function genericEntryForm(kind, item) {
    const isExpense=kind==="expense", isPurchase=kind==="purchase", isCash=kind==="cash";
    const editing=!!item&&(isExpense||isPurchase||isCash);
    const title=editing?tr(isExpense?"editExpense":isPurchase?"editPurchase":"editCash"):isExpense?tr("addExpense"):isPurchase?tr("addPurchase"):tr("addCash");
    const entryId=esc(item&&item.id||"");
    const dateField='<div class="field"><label>'+tr("date")+'</label><input type="date" name="date" required value="'+esc(item&&item.date||todayISO())+'"></div>';
    const methodField='<div class="field"><label>'+tr("method")+'</label><select name="method">'+methodOptions(item&&item.method||"cash")+'</select></div>';
    let body;
    if(isExpense) {
      const savedLines=editing?(Array.isArray(item.items)&&item.items.length?item.items:[{category:item.category,description:item.description,amountPaisa:item.amountPaisa}]):[null];
      const lines=savedLines.map(function(line){return expenseLine(line);}).join("");
      body='<form data-form="expense" id="expense-form" data-entry-id="'+entryId+'"><div class="form-grid">'+dateField+methodField+'</div><label style="font-size:11px;font-weight:600;color:var(--muted)">'+tr("expenseItems")+'</label><div class="table-wrap"><table class="line-items"><thead><tr><th>'+tr("category")+'</th><th>'+tr("description")+'</th><th>'+tr("amount")+' (PKR)</th><th></th></tr></thead><tbody id="expense-lines">'+lines+'</tbody></table></div><button type="button" class="btn btn-secondary btn-small" data-action="add-expense-line">＋ '+tr("addLine")+'</button><div class="totals-box"><span>'+tr("total")+'</span><strong data-expense-total>PKR 0.00</strong></div><div class="modal-foot"><button class="btn btn-secondary" type="button" data-action="close-modal">'+tr("cancel")+'</button><button class="btn btn-primary" type="submit">'+tr("save")+'</button></div></form>';
    } else {
      const category=isPurchase?'<div class="field"><label>'+tr("category")+'</label><select name="category">'+categorySelect(kind,item&&item.category)+'</select></div>':'<div class="field"><label>'+tr("category")+'</label><input name="category" required value="'+esc(item&&item.category||"Other")+'"></div>';
      const direction=kind==="cash"?'<div class="field"><label>'+tr("category")+'</label><select name="direction"><option value="in" '+((item&&item.direction||"in")==="in"?"selected":"")+'>'+tr("cashIn")+'</option><option value="out" '+(item&&item.direction==="out"?"selected":"")+'>'+tr("cashOut")+'</option></select></div>':"";
      body='<form data-form="'+kind+'" data-entry-id="'+entryId+'"><div class="form-grid">'+dateField+category+direction+'<div class="field"><label>'+tr("amount")+' (PKR)</label><input type="number" name="amount" min="0.01" step="0.01" required value="'+(item?paisaToRupees(item.amountPaisa):"")+'"></div>'+methodField+'<div class="field full"><label>'+tr("description")+'</label><input name="description" placeholder="'+tr("description")+'" value="'+esc(item&&item.description||"")+'"></div></div><div class="modal-foot"><button class="btn btn-secondary" type="button" data-action="close-modal">'+tr("cancel")+'</button><button class="btn btn-primary" type="submit">'+tr("save")+'</button></div></form>';
    }
    modal(title,body);
    if(isExpense) recalcExpenseForm();
  }
  async function ledgerAdjustmentForm() {
    const data=await getAll();
    if(!data.customers.length){toast(tr("noCustomers"));return;}
    const customer=data.customers.find(function(c){return c.id===state.customerId;});
    let options="";
    data.customers.forEach(function(c){options+='<option value="'+esc(c.id)+'" '+(customer&&customer.id===c.id?"selected":"")+'>'+esc(c.name)+'</option>';});
    modal(tr("ledgerAdjust"),'<form data-form="adjustment"><div class="field"><label>'+tr("customer")+'</label><select name="customerId">'+options+'</select></div><div class="field"><label>'+tr("adjustType")+'</label><select name="type"><option value="debit">'+tr("debit")+' · '+tr("debitAdds")+'</option><option value="credit">'+tr("credit")+' · '+tr("creditReduces")+'</option></select></div><div class="field"><label>'+tr("date")+'</label><input name="date" type="date" required value="'+todayISO()+'"></div><div class="field"><label>'+tr("amount")+' (PKR)</label><input name="amount" type="number" min="0.01" step="0.01" required></div><div class="field"><label>'+tr("description")+'</label><input name="description" required></div><div class="modal-foot"><button class="btn btn-secondary" type="button" data-action="close-modal">'+tr("cancel")+'</button><button class="btn btn-primary" type="submit">'+tr("save")+'</button></div></form>');
  }
  async function printInvoice(id) {
    const inv=await dbGet("invoices",id); if(!inv) return;
    const pop=window.open("","_blank","width=860,height=740");
    if(!pop){toast("Allow pop-ups to print this invoice.");return;}
    let rows="";
    (inv.items||[]).forEach(function(i){const dimensions=invoiceItemDimensions(i);rows+='<tr><td>'+esc(i.description)+'</td><td>'+(dimensions?fmtArea(dimensions.heightFt):"—")+'</td><td>'+(dimensions?fmtArea(dimensions.widthFt):"—")+'</td><td>'+(dimensions?fmtArea(dimensions.areaSqFt):"—")+'</td><td>'+fmtQty(i.qtyMilli)+'</td><td>PKR '+paisaToRupees(i.ratePaisa)+'</td><td>PKR '+paisaToRupees(i.lineTotalPaisa)+'</td></tr>';});
    let html='<!doctype html><html><head><meta charset="utf-8"><title>'+tr("printTitle")+' '+esc(inv.number)+'</title><style>body{font:14px Arial,sans-serif;color:#202a3a;max-width:800px;margin:40px auto;padding:0 24px}header{display:flex;justify-content:space-between;border-bottom:2px solid #2fb28e;padding-bottom:18px;margin-bottom:22px}h1{font-size:25px;margin:0 0 6px}h2{font-size:16px;margin:0}p{color:#657286;line-height:1.5;margin:3px 0}.right{text-align:right}table{width:100%;border-collapse:collapse;margin:25px 0}th,td{text-align:left;padding:11px 9px;border-bottom:1px solid #e5e9ef}th{font-size:11px;color:#657286;background:#f7f9fb}.totals{margin-left:auto;width:290px}.totals p{display:flex;justify-content:space-between;padding:5px 0}.totals .grand{border-top:1px solid #ccd4df;padding-top:12px;font-size:17px;font-weight:bold;color:#172434}.foot{border-top:1px solid #e5e9ef;padding-top:18px;margin-top:32px;font-size:11px}@media print{body{margin:12mm auto}}</style></head><body><header><div><h1>'+esc(config.businessName||"3 Dot Graphics")+'</h1><p>'+esc(config.businessMobile||"")+'</p><p>'+esc(config.businessAddress||"")+'</p></div><div class="right"><h2>'+tr("printTitle")+'</h2><p><strong>'+esc(inv.number)+'</strong></p><p>'+dateText(inv.date)+'</p></div></header><p><strong>'+tr("customer")+':</strong> '+esc(inv.customerName)+'</p><p>'+esc(inv.customerMobile||"")+'</p><p>'+esc(inv.customerAddress||"")+'</p><table><thead><tr><th>'+tr("item")+'</th><th>'+tr("size")+'</th><th>'+tr("quantity")+'</th><th>'+tr("rate")+'</th><th>'+tr("lineTotal")+'</th></tr></thead><tbody>'+rows+'</tbody></table><section class="totals"><p><span>'+tr("subtotal")+'</span><strong>PKR '+paisaToRupees(inv.subtotalPaisa)+'</strong></p><p><span>'+tr("discount")+'</span><strong>PKR '+paisaToRupees(inv.discountPaisa)+'</strong></p><p class="grand"><span>'+tr("total")+'</span><strong>PKR '+paisaToRupees(inv.totalPaisa)+'</strong></p><p><span>'+tr("paid")+'</span><strong>PKR '+paisaToRupees(invoicePaid(inv))+'</strong></p><p><span>'+tr("remaining")+'</span><strong>PKR '+paisaToRupees(invoiceDue(inv))+'</strong></p></section><div class="foot">'+esc(config.businessName||"3 Dot Graphics")+' · PKR</div><script>window.onload=function(){setTimeout(function(){window.print()},250)};<\/script></body></html>';
    const oldHeaders='<tr><th>'+tr("item")+'</th><th>'+tr("size")+'</th><th>'+tr("quantity")+'</th><th>'+tr("rate")+'</th><th>'+tr("lineTotal")+'</th></tr>';
    const newHeaders='<tr><th>'+tr("item")+'</th><th>'+tr("height")+'</th><th>'+tr("width")+'</th><th>'+tr("squareFeet")+'</th><th>'+tr("quantity")+'</th><th>'+tr("rate")+'</th><th>'+tr("lineTotal")+'</th></tr>';
    html=html.replace(oldHeaders,newHeaders);
    const totalRow='<p class="grand"><span>'+tr("total")+'</span><strong>PKR '+paisaToRupees(inv.totalPaisa)+'</strong></p>';
    const advance=invoiceAdvance(inv);
    const advanceRow='<p><span>'+tr("advance")+'</span><strong>PKR '+paisaToRupees(advance&&advance.amountPaisa||0)+'</strong></p>';
    html=html.replace(totalRow,totalRow+advanceRow);
    pop.document.open(); pop.document.write(html); pop.document.close();
  }
  async function invoicePdfBlob(inv) {
    const items=Array.isArray(inv.items)?inv.items:[];
    const width=1240;
    const height=1754+Math.max(0,items.length-20)*36;
    const canvas=document.createElement("canvas"); canvas.width=width; canvas.height=height;
    const ctx=canvas.getContext("2d"); if(!ctx) throw new Error(tr("whatsappError"));
    const rtl=config.language==="ur";
    const left=92,right=width-92,contentWidth=right-left;
    ctx.fillStyle="#ffffff"; ctx.fillRect(0,0,width,height);
    ctx.fillStyle="#2fb28e"; ctx.fillRect(0,0,width,20);
    function drawText(value,x,y,maxWidth,options) {
      const opts=options||{}; const text=String(value==null?"":value);
      let size=opts.size||24; ctx.save(); ctx.fillStyle=opts.color||"#202a3a"; ctx.textAlign=opts.align||"left"; ctx.textBaseline=opts.baseline||"alphabetic"; ctx.direction=opts.rtl?"rtl":"ltr";
      ctx.font=(opts.weight||"400")+" "+size+"px Arial, sans-serif";
      while(ctx.measureText(text).width>maxWidth&&size>14){size-=1;ctx.font=(opts.weight||"400")+" "+size+"px Arial, sans-serif";}
      ctx.fillText(text,x,y,maxWidth); ctx.restore();
    }
    function rule(y,color) {ctx.beginPath();ctx.moveTo(left,y);ctx.lineTo(right,y);ctx.strokeStyle=color||"#e5eaf0";ctx.lineWidth=2;ctx.stroke();}
    drawText(config.businessName||"3 Dot Graphics",left,105,620,{size:46,weight:"700"});
    if(config.businessMobile) drawText(config.businessMobile,left,151,600,{size:24,color:"#667387"});
    if(config.businessAddress) drawText(config.businessAddress,left,190,600,{size:22,color:"#667387"});
    drawText(tr("printTitle"),right,94,440,{size:27,weight:"700",align:"right",rtl:rtl});
    drawText(inv.number||"",right,139,440,{size:31,weight:"700",align:"right"});
    drawText(dateText(inv.date),right,180,440,{size:23,color:"#667387",align:"right"});
    rule(228,"#2fb28e");
    ctx.fillStyle="#f5f8fa"; ctx.fillRect(left,270,contentWidth,158);
    drawText(tr("customer"),left+20,307,contentWidth-40,{size:21,color:"#667387",rtl:rtl});
    drawText(inv.customerName||"",left+20,350,contentWidth-40,{size:29,weight:"700",rtl:rtl});
    const customerInfo=[inv.customerMobile,inv.customerAddress].filter(Boolean).join(" · ");
    drawText(customerInfo,left+20,393,contentWidth-40,{size:22,color:"#667387",rtl:rtl});
    const tableY=478, headH=56;
    const columns=[{x:left+15,w:270,label:tr("item"),align:"left"},{x:left+295,w:100,label:tr("height"),align:"right"},{x:left+405,w:100,label:tr("width"),align:"right"},{x:left+515,w:120,label:tr("squareFeet"),align:"right"},{x:left+645,w:85,label:tr("quantity"),align:"right"},{x:left+740,w:140,label:tr("rate"),align:"right"},{x:left+890,w:151,label:tr("lineTotal"),align:"right"}];
    ctx.fillStyle="#edf3f5"; ctx.fillRect(left,tableY,contentWidth,headH);
    columns.forEach(function(col){drawText(col.label,col.align==="right"?col.x+col.w:col.x,tableY+36,col.w,{size:18,weight:"700",color:"#536174",align:col.align,rtl:rtl});});
    const rowH=Math.min(62,Math.max(36,Math.floor(720/Math.max(items.length,1))));
    items.forEach(function(item,index){
      const y=tableY+headH+index*rowH;
      if(index%2===1){ctx.fillStyle="#fbfcfd";ctx.fillRect(left,y,contentWidth,rowH);}
      const mid=y+Math.floor(rowH/2)+8;
      const dimensions=invoiceItemDimensions(item);
      drawText(item.description||"",columns[0].x,mid,columns[0].w,{size:23,rtl:rtl});
      drawText(dimensions?fmtArea(dimensions.heightFt):"—",columns[1].x+columns[1].w,mid,columns[1].w,{size:20,align:"right"});
      drawText(dimensions?fmtArea(dimensions.widthFt):"—",columns[2].x+columns[2].w,mid,columns[2].w,{size:20,align:"right"});
      drawText(dimensions?fmtArea(dimensions.areaSqFt):"—",columns[3].x+columns[3].w,mid,columns[3].w,{size:20,align:"right"});
      drawText(fmtQty(item.qtyMilli),columns[4].x+columns[4].w,mid,columns[4].w,{size:21,align:"right"});
      drawText(money(item.ratePaisa),columns[5].x+columns[5].w,mid,columns[5].w,{size:20,align:"right"});
      drawText(money(item.lineTotalPaisa),columns[6].x+columns[6].w,mid,columns[6].w,{size:21,weight:"600",align:"right"});
      rule(y+rowH,"#e8edf1");
    });
    const tableEnd=tableY+headH+items.length*rowH;
    let totalY=tableEnd+45;
    const totalX=right-430,totalW=430,lineH=48;
    const advance=invoiceAdvance(inv);
    const totalRows=[[tr("subtotal"),money(inv.subtotalPaisa)],[tr("discount"),money(inv.discountPaisa)],[tr("total"),money(inv.totalPaisa)],[tr("advance"),money(advance&&advance.amountPaisa||0)],[tr("paid"),money(invoicePaid(inv))],[tr("remaining"),money(invoiceDue(inv))]];
    totalRows.forEach(function(row,index){
      if(index===2){ctx.fillStyle="#e8f7f1";ctx.fillRect(totalX-14,totalY-31,totalW+14,lineH);}
      drawText(row[0],totalX,totalY,totalW-150,{size:index===2?24:21,weight:index===2?"700":"400",color:index===2?"#177b60":"#667387",rtl:rtl});
      drawText(row[1],right,totalY,140,{size:index===2?25:22,weight:index===2?"700":"600",align:"right"});
      totalY+=lineH;
    });
    const footerY=Math.max(height-54,totalY+70);
    rule(footerY-34,"#dfe6ec");
    drawText((config.businessName||"3 Dot Graphics")+" · PKR",left,footerY,contentWidth,{size:18,color:"#778399"});
    const jpeg=await new Promise(function(resolve,reject){canvas.toBlob(function(blob){if(blob)resolve(blob);else reject(new Error(tr("whatsappError")));},"image/jpeg",0.93);});
    const jpegBytes=new Uint8Array(await jpeg.arrayBuffer());
    return buildImagePdf(jpegBytes,width,height);
  }
  function buildImagePdf(imageBytes,imageWidth,imageHeight) {
    const pageWidth=595.28,pageHeight=pageWidth*imageHeight/imageWidth;
    const content="q\n"+pageWidth+" 0 0 "+pageHeight+" 0 0 cm\n/Im0 Do\nQ\n";
    const chunks=[]; let length=0; const offsets=[0];
    function add(value) {const bytes=typeof value==="string"?new TextEncoder().encode(value):value;chunks.push(bytes);length+=bytes.length;}
    add("%PDF-1.4\n% 3 Dot Graphics\n");
    const objects=[
      "<< /Type /Catalog /Pages 2 0 R >>",
      "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
      "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 "+pageWidth+" "+pageHeight+"] /Resources << /XObject << /Im0 5 0 R >> >> /Contents 4 0 R >>",
      "<< /Length "+new TextEncoder().encode(content).length+" >>\nstream\n"+content+"endstream"
    ];
    objects.forEach(function(object,index){const number=index+1;offsets[number]=length;add(number+" 0 obj\n"+object+"\nendobj\n");});
    offsets[5]=length;
    add("5 0 obj\n<< /Type /XObject /Subtype /Image /Width "+imageWidth+" /Height "+imageHeight+" /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length "+imageBytes.length+" >>\nstream\n");
    add(imageBytes); add("\nendstream\nendobj\n");
    const xref=length; add("xref\n0 6\n0000000000 65535 f \n");
    for(let i=1;i<=5;i++) add(String(offsets[i]).padStart(10,"0")+" 00000 n \n");
    add("trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n"+xref+"\n%%EOF");
    return new Blob(chunks,{type:"application/pdf"});
  }
  function supportsNativeFileShare() {
    if(!navigator.share||!navigator.canShare||typeof File==="undefined") return false;
    try {return navigator.canShare({files:[new File([""],"invoice.pdf",{type:"application/pdf"})]});} catch(_) {return false;}
  }
  function whatsappNumber(value) {
    let digits=String(value||"").replace(/\D/g,"");
    if(digits.indexOf("00")===0) digits=digits.slice(2);
    else if(digits.indexOf("0")===0) digits="92"+digits.slice(1);
    else if(digits.length===10&&digits.indexOf("3")===0) digits="92"+digits;
    return digits.length>=8?digits:"";
  }
  function whatsappChatUrl(inv) {
    const message=tr("whatsappMessage").replace("{number}",String(inv.number||"")).replace("{amount}",paisaToRupees(inv.totalPaisa));
    const number=whatsappNumber(inv.customerMobile);
    return number?"https://wa.me/"+number+"?text="+encodeURIComponent(message):"https://web.whatsapp.com/";
  }
  function downloadBlob(blob,filename) {
    const url=URL.createObjectURL(blob),link=document.createElement("a");
    link.href=url;link.download=filename;document.body.appendChild(link);link.click();link.remove();
    setTimeout(function(){URL.revokeObjectURL(url);},60000);
  }
  async function shareInvoiceOnWhatsapp(id,shareWindow,directShare) {
    try {
      const inv=await dbGet("invoices",id); if(!inv) throw new Error(tr("whatsappError"));
      toast(tr("whatsappPreparing"));
      const blob=await invoicePdfBlob(inv);
      const filename="3 Dot Graphics-"+String(inv.number||"Invoice").replace(/[^a-z0-9_-]/gi,"-")+".pdf";
      const file=new File([blob],filename,{type:"application/pdf"});
      const message=tr("whatsappMessage").replace("{number}",String(inv.number||"")).replace("{amount}",paisaToRupees(inv.totalPaisa));
      let canShareFile=false;
      try {canShareFile=!!(directShare&&navigator.canShare&&navigator.canShare({files:[file]}));} catch(_) {}
      if(canShareFile) {
        try {await navigator.share({files:[file],title:"3 Dot Graphics "+String(inv.number||"Invoice"),text:message});toast(tr("whatsappShareHint"));return;}
        catch(err) {if(err&&err.name==="AbortError") return;console.error(err);}
      }
      if(window.ThreeDotNative && typeof window.ThreeDotNative.sharePdf === "function") {
        const dataUrl = await new Promise(function(resolve,reject) {
          const reader = new FileReader();
          reader.onload = function(){resolve(String(reader.result||""));};
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
        const base64 = dataUrl.substring(dataUrl.indexOf(",")+1);
        window.ThreeDotNative.sharePdf(base64,filename,"application/pdf","3 Dot Graphics "+String(inv.number||"Invoice"),message);
        toast(tr("whatsappShareHint"));
        return;
      }
      downloadBlob(blob,filename);
      if(shareWindow&&!shareWindow.closed) shareWindow.location.href=whatsappChatUrl(inv);
      toast(tr("whatsappAttachHint"));
    } catch(err) {
      if(shareWindow&&!shareWindow.closed) shareWindow.close();
      if(err&&err.name==="AbortError") return;
      console.error(err); toast(err&&err.message?err.message:tr("whatsappError"));
    }
  }
  function bytesToBase64(bytes) { let binary=""; bytes.forEach(function(byte){binary+=String.fromCharCode(byte);}); return btoa(binary); }
  function base64ToBytes(value) { const binary=atob(value); const bytes=new Uint8Array(binary.length); for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i); return bytes; }
  function backupPassphraseForm() {
    modal(tr("createBackup"),'<form data-form="backup"><div class="notice">'+tr("backupSecure")+'</div><div class="field"><label>'+tr("backupPass")+'</label><input name="passphrase" type="password" minlength="8" autocomplete="new-password" required></div><div class="field"><label>'+tr("backupPassAgain")+'</label><input name="confirmPassphrase" type="password" minlength="8" autocomplete="new-password" required></div><div class="modal-foot"><button class="btn btn-secondary" type="button" data-action="close-modal">'+tr("cancel")+'</button><button class="btn btn-primary" type="submit">'+tr("createBackup")+'</button></div></form>');
  }
  async function backupData(pass) {
    if(pass.length<8) throw new Error(tr("backupPass"));
    const data={format:"FLEXPRO",version:1,createdAt:new Date().toISOString(),config:config,stores:{}};
    for(const name of STORE_NAMES.filter(function(n){return n!=="config";})) data.stores[name]=await dbAll(name);
    const salt=crypto.getRandomValues(new Uint8Array(16)), iv=crypto.getRandomValues(new Uint8Array(12));
    const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(pass),"PBKDF2",false,["deriveKey"]);
    const aes=await crypto.subtle.deriveKey({name:"PBKDF2",salt:salt,iterations:310000,hash:"SHA-256"},key,{name:"AES-GCM",length:256},false,["encrypt"]);
    const encrypted=await crypto.subtle.encrypt({name:"AES-GCM",iv:iv},aes,new TextEncoder().encode(JSON.stringify(data)));
    const packageData={format:"FLEXPRO-ENCRYPTED",version:1,kdf:"PBKDF2-SHA-256",iterations:310000,cipher:"AES-256-GCM",salt:bytesToBase64(salt),iv:bytesToBase64(iv),data:bytesToBase64(new Uint8Array(encrypted))};
    const blob=new Blob([JSON.stringify(packageData)],{type:"application/octet-stream"});
    const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download="3 Dot Graphics-backup-"+todayISO()+".flexpro"; a.click(); setTimeout(function(){URL.revokeObjectURL(url);},1000);
  }
  function validBackup(data) {
    if(!data||data.format!=="FLEXPRO"||data.version!==1||!data.config||!data.stores) return false;
    return STORE_NAMES.filter(function(n){return n!=="config";}).every(function(n){return Array.isArray(data.stores[n]);}) && data.stores.invoices.every(function(i){return i&&typeof i.id==="string"&&typeof i.totalPaisa==="number"&&Array.isArray(i.items)&&Array.isArray(i.payments);});
  }
  async function restoreFile(file) {
    if(!file)return;
    try {
      const packageData=JSON.parse(await file.text());
      if(packageData.format!=="FLEXPRO-ENCRYPTED"||packageData.version!==1||packageData.kdf!=="PBKDF2-SHA-256"||packageData.cipher!=="AES-256-GCM"||packageData.iterations!==310000) throw new Error("Unsupported backup.");
      pendingBackup=packageData;
      modal(tr("restoreBackup"),'<form data-form="restore"><div class="field"><label>'+tr("restorePass")+'</label><input name="passphrase" type="password" autocomplete="current-password" required></div><div class="notice warning">'+tr("confirmRestore")+'</div><div class="modal-foot"><button class="btn btn-secondary" type="button" data-action="close-modal">'+tr("cancel")+'</button><button class="btn btn-primary" type="submit">'+tr("restoreBackup")+'</button></div></form>');
    } catch(err) { console.error(err); pendingBackup=null; toast(tr("incorrectPass")); }
  }
  async function restoreData(packageData, pass) {
    try {
      const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(pass),"PBKDF2",false,["deriveKey"]);
      const aes=await crypto.subtle.deriveKey({name:"PBKDF2",salt:base64ToBytes(packageData.salt),iterations:packageData.iterations,hash:"SHA-256"},key,{name:"AES-GCM",length:256},false,["decrypt"]);
      const decoded=await crypto.subtle.decrypt({name:"AES-GCM",iv:base64ToBytes(packageData.iv)},aes,base64ToBytes(packageData.data));
      const data=JSON.parse(new TextDecoder().decode(decoded));
      if(!validBackup(data)) throw new Error("Invalid backup.");
      const tx=db.transaction(STORE_NAMES,"readwrite");
      STORE_NAMES.forEach(function(name){tx.objectStore(name).clear();});
      tx.objectStore("config").put(Object.assign({},data.config,{id:"main"}));
      STORE_NAMES.filter(function(n){return n!=="config";}).forEach(function(name){data.stores[name].forEach(function(item){tx.objectStore(name).put(item);});});
      await new Promise(function(resolve,reject){tx.oncomplete=resolve;tx.onerror=function(){reject(tx.error);};tx.onabort=function(){reject(tx.error||new Error("Database transaction failed"));};});
      config=Object.assign({},data.config,{id:"main",auth:config&&config.auth?config.auth:(data.config.auth||null)});
    } catch(err) {
      console.error(err);
      if(err&&err.name==="QuotaExceededError") throw err;
      throw new Error(tr("incorrectPass"));
    }
  }
  async function handleForm(form) {
    const kind=form.dataset.form; const fd=new FormData(form);
    if(kind==="auth-setup") {
      const password=String(fd.get("password")||"");
      if(password.length<8) throw new Error(tr("passwordTooShort"));
      if(password!==String(fd.get("confirmPassword")||"")) throw new Error(tr("passwordMismatch"));
      config=Object.assign({},config,{auth:await makeAdminAuth(password)});
      await dbPut("config",config); authenticated=true; await render(); return;
    }
    if(kind==="password-reset") {
      const password=String(fd.get("password")||"");
      if(password.length<8) throw new Error(tr("passwordTooShort"));
      if(password!==String(fd.get("confirmPassword")||"")) throw new Error(tr("passwordMismatch"));
      config=Object.assign({},config,{auth:await makeAdminAuth(password)});
      await dbPut("config",config); resettingPassword=false; authenticated=true; await render(); toast(tr("passwordReset")); return;
    }
    if(kind==="login") {
      const auth=config.auth;
      if(!auth||String(fd.get("username")||"").trim().toLowerCase()!==String(auth.username||"admin").toLowerCase()) throw new Error(tr("loginFailed"));
      const actual=await passwordVerifier(String(fd.get("password")||""),auth);
      if(!sameSecret(actual,auth.verifier)) throw new Error(tr("loginFailed"));
      authenticated=true; await render(); return;
    }
    if(kind==="change-password") {
      const oldPassword=String(fd.get("currentPassword")||""),password=String(fd.get("newPassword")||"");
      const oldVerifier=await passwordVerifier(oldPassword,config.auth);
      if(!sameSecret(oldVerifier,config.auth.verifier)) throw new Error(tr("currentPasswordWrong"));
      if(password.length<8) throw new Error(tr("passwordTooShort"));
      if(password!==String(fd.get("confirmPassword")||"")) throw new Error(tr("passwordMismatch"));
      config=Object.assign({},config,{auth:await makeAdminAuth(password)});
      await dbPut("config",config); await render(); toast(tr("passwordChanged")); return;
    }
    if(kind==="setup") {
      config=Object.assign({},config,{businessName:String(fd.get("businessName")).trim(),businessMobile:String(fd.get("businessMobile")||"").trim(),businessAddress:String(fd.get("businessAddress")||"").trim(),openingCashPaisa:moneyInputToPaisa(fd.get("openingCash")),language:String(fd.get("language")||"en"),theme:String(fd.get("theme")||"light"),setupComplete:true});
      if(!config.businessName) throw new Error(tr("invalid"));
      await dbPut("config",config); state.page="dashboard"; await reload(); return;
    }
    if(kind==="customer") {
      const id=String(fd.get("id")||"");
      const customer={id:id||uid(),name:String(fd.get("name")||"").trim(),mobile:String(fd.get("mobile")||"").trim(),address:String(fd.get("address")||"").trim(),updatedAt:new Date().toISOString()};
      if(!customer.name) throw new Error(tr("invalid"));
      await dbPut("customers",customer); document.querySelector(".modal-backdrop")?.remove(); await reload(); toast(tr("customerSaved")); return;
    }
    if(kind==="invoice") {
      const editing=!!form.dataset.invoiceId;
      await saveInvoice(form); document.querySelector(".modal-backdrop")?.remove(); await reload(); toast(tr(editing?"invoiceUpdated":"invoiceSaved")); return;
    }
    if(kind==="payment") {
      await savePayment(form); document.querySelector(".modal-backdrop")?.remove(); await reload(); toast(tr("paymentSaved")); return;
    }
    if(kind==="expense"||kind==="purchase"||kind==="cash") {
      let amount,expenseItems=[];
      if(kind==="expense") {
        form.querySelectorAll("#expense-lines tr").forEach(function(row){
          const category=String(row.querySelector('[name="expenseCategory"]').value||"Other");
          const description=String(row.querySelector('[name="expenseDescription"]').value||"").trim();
          const lineAmount=moneyInputToPaisa(row.querySelector('[name="expenseAmount"]').value);
          if(!description||lineAmount<=0) throw new Error(tr("invalid"));
          expenseItems.push({category:category,description:description,amountPaisa:lineAmount});
        });
        if(!expenseItems.length) throw new Error(tr("invalid"));
        amount=sumAmount(expenseItems,function(line){return line.amountPaisa;});
        if(!Number.isSafeInteger(amount)||amount<=0) throw new Error(tr("invalid"));
      } else {
        amount=moneyInputToPaisa(fd.get("amount")); if(amount<=0) throw new Error(tr("invalid"));
      }
      const entryId=String(form.dataset.entryId||"");
      const storeName=kind==="expense"?"expenses":kind==="purchase"?"purchases":"cashEntries";
      const existing=entryId?await dbGet(storeName,entryId):null;
      if(entryId&&!existing) throw new Error(tr("invalid"));
      const categories=Array.from(new Set(expenseItems.map(function(line){return line.category;})));
      const summary=kind==="expense"?{items:expenseItems,category:categories.length===1?categories[0]:"Multiple",description:expenseItems.map(function(line){return line.description;}).join(", ")}:{category:String(fd.get("category")||"Other"),description:String(fd.get("description")||"").trim()};
      const item=Object.assign(existing||{id:uid(),createdAt:new Date().toISOString()},summary,{date:String(fd.get("date")||todayISO()),amountPaisa:amount,method:String(fd.get("method")||"cash")});
      if(entryId) item.updatedAt=new Date().toISOString();
      if(kind==="expense") await dbPut("expenses",item);
      else if(kind==="purchase") await dbPut("purchases",item);
      else { item.direction=String(fd.get("direction")||"in"); await dbPut("cashEntries",item); }
      document.querySelector(".modal-backdrop")?.remove(); await reload(); toast(kind==="expense"?tr(entryId?"expenseUpdated":"expenseSaved"):kind==="purchase"?tr(entryId?"purchaseUpdated":"purchaseSaved"):tr(entryId?"cashUpdated":"cashSaved")); return;
    }
    if(kind==="adjustment") {
      const amount=moneyInputToPaisa(fd.get("amount")); if(amount<=0)throw new Error(tr("invalid"));
      await dbPut("adjustments",{id:uid(),customerId:String(fd.get("customerId")),type:String(fd.get("type")),date:String(fd.get("date")||todayISO()),amountPaisa:amount,description:String(fd.get("description")||"").trim(),createdAt:new Date().toISOString()});
      document.querySelector(".modal-backdrop")?.remove(); await reload(); toast(tr("adjustmentSaved")); return;
    }
    if(kind==="backup") {
      const pass=String(fd.get("passphrase")||"");
      if(pass.length<8) throw new Error(tr("backupPass"));
      if(pass!==String(fd.get("confirmPassphrase")||"")) throw new Error(tr("invalid"));
      await backupData(pass); document.querySelector(".modal-backdrop")?.remove(); toast(tr("backupDone")); return;
    }
    if(kind==="restore") {
      if(!pendingBackup) throw new Error(tr("incorrectPass"));
      await restoreData(pendingBackup,String(fd.get("passphrase")||""));
      pendingBackup=null; document.querySelector(".modal-backdrop")?.remove(); await reload(); toast(tr("restoreDone")); return;
    }
    if(kind==="settings") {
      const updated=Object.assign({},config,{businessName:String(fd.get("businessName")||"").trim(),businessMobile:String(fd.get("businessMobile")||"").trim(),businessAddress:String(fd.get("businessAddress")||"").trim(),openingCashPaisa:moneyInputToPaisa(fd.get("openingCash")),language:String(fd.get("language")||"en"),theme:String(fd.get("theme")||"light")});
      if(!updated.businessName) throw new Error(tr("invalid"));
      await dbPut("config",updated); await reload(); toast(tr("settingsSaved")); return;
    }
  }
  document.addEventListener("click",async function(event) {
    const target=event.target.closest("[data-action]"); if(!target)return;
    const action=target.dataset.action;
    try {
      if(action==="lock"){authenticated=false;state.search="";await render();}
      else if(action==="forgot-password"){resettingPassword=true;renderAuth();}
      else if(action==="cancel-password-reset"){resettingPassword=false;renderAuth();}
      else if(action==="nav"){state.page=target.dataset.page;state.search="";state.customerId=null;await render();}
      else if(action==="toggle-theme"){config.theme=config.theme==="dark"?"light":"dark";await dbPut("config",config);await reload();}
      else if(action==="toggle-language"){config.language=config.language==="ur"?"en":"ur";await dbPut("config",config);await reload();}
      else if(action==="add-customer") customerForm();
      else if(action==="edit-customer") customerForm(await dbGet("customers",target.dataset.id));
      else if(action==="ledger"){state.customerId=target.dataset.id;state.page="ledger";state.search="";await render();}
      else if(action==="new-invoice") invoiceForm(await getAll());
      else if(action==="edit-invoice"){const data=await getAll();const invoice=data.invoices.find(function(i){return i.id===target.dataset.id;});if(invoice) invoiceForm(data,invoice);}
      else if(action==="payment") paymentForm(target.dataset.id);
      else if(action==="print") printInvoice(target.dataset.id);
      else if(action==="whatsapp-invoice"){const mobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);const direct=mobile&&supportsNativeFileShare();const shareWindow=direct?null:window.open("about:blank","_blank");if(shareWindow)shareWindow.opener=null;await shareInvoiceOnWhatsapp(target.dataset.id,shareWindow,direct);}
      else if(action==="edit-entry"){const kind=target.dataset.kind;if(kind!=="expense"&&kind!=="purchase")throw new Error(tr("invalid"));const storeName=kind==="expense"?"expenses":"purchases";const item=await dbGet(storeName,target.dataset.id);if(item) genericEntryForm(kind,item);}
      else if(action==="edit-cash-entry"){const item=await dbGet("cashEntries",target.dataset.id);if(item) genericEntryForm("cash",item);}
      else if(action==="add-expense") genericEntryForm("expense");
      else if(action==="add-expense-line"){const body=document.getElementById("expense-lines");if(body){body.insertAdjacentHTML("beforeend",expenseLine(null));recalcExpenseForm();}}
      else if(action==="remove-expense-line"){const body=document.getElementById("expense-lines");if(body&&body.rows.length>1){target.closest("tr").remove();recalcExpenseForm();}}
      else if(action==="add-purchase") genericEntryForm("purchase");
      else if(action==="add-cash") genericEntryForm("cash");
      else if(action==="ledger-adjust") ledgerAdjustmentForm();
      else if(action==="add-line"){document.getElementById("invoice-lines").insertAdjacentHTML("beforeend",invoiceLine(""));recalcInvoice();}
      else if(action==="remove-line"){const body=document.getElementById("invoice-lines");if(body.rows.length>1){target.closest("tr").remove();recalcInvoice();}}
      else if(action==="close-modal"||(action==="backdrop"&&event.target===target)){document.querySelector(".modal-backdrop")?.remove();}
      else if(action==="backup") backupPassphraseForm();
      else if(action==="restore") document.getElementById("backup-file").click();
    } catch(err) { console.error(err); toast(err.message||tr("invalid")); }
  });
  document.addEventListener("submit",async function(event) {
    const form=event.target.closest("form[data-form]");if(!form)return;
    event.preventDefault();
    try { await handleForm(form); }
    catch(err) { console.error(err);toast(err.message||tr("invalid")); }
  });
  document.addEventListener("input",function(event) {
    if(event.target.closest("#invoice-form")) recalcInvoice();
    if(event.target.closest("#expense-form")) recalcExpenseForm();
    if(event.target.matches("[data-search]")) {
      const pos=event.target.selectionStart; const y=window.scrollY; state.search=event.target.value;
      render().then(function(){
        const input=document.querySelector("[data-search]");
        if(input){input.focus();input.setSelectionRange(pos,pos);}
        window.scrollTo(0,y);
      });
    }
  });
  document.addEventListener("change",async function(event) {
    if(event.target.matches("[data-report-period]")){state.period=event.target.value;await render();}
    if(event.target.matches("[data-report-date]")){state.reportDate=event.target.value||todayISO();await render();}
    if(event.target.matches("#backup-file")){await restoreFile(event.target.files&&event.target.files[0]);event.target.value="";}
    if(event.target.matches("#payment-invoice")){const option=event.target.selectedOptions[0];const amount=document.getElementById("payment-amount");if(option&&amount){amount.max=option.dataset.due;amount.value=option.dataset.due;}}
    if(event.target.matches('[data-form="settings"] select')) { /* saved with the form */ }
    if(event.target.matches('#payment-invoice-placeholder')) {}
  });
  document.addEventListener("input",function(event) {
    if(event.target.matches('#invoice-form [name="discount"],#invoice-form [name="advance"]')) recalcInvoice();
  });
  dbOpen().then(async function (opened) { db=opened;await loadConfig();await render(); })
    .catch(function(error){console.error(error);document.getElementById("app").innerHTML='<main class="onboarding"><section class="onboard-card"><h1>3 Dot Graphics</h1><p>Could not open local browser storage. Use the app in a supported browser and make sure site storage is enabled.</p></section></main>';});
})();
