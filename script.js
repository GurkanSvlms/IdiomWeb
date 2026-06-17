const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const languageButtons = document.querySelectorAll("[data-lang-option]");
const storageKey = "idiomswipe-language";

const translations = {
  en: {
    homeMetaTitle: "IdiomSwipe - Learn expressions people actually use",
    homeMetaDescription: "IdiomSwipe helps you learn English and Turkish idioms, phrasal verbs, proverbs, and cultural equivalents with fast swipe cards and mini quizzes.",
    privacyMetaTitle: "Privacy Policy - IdiomSwipe",
    privacyMetaDescription: "Privacy Policy for IdiomSwipe.",
    termsMetaTitle: "Terms of Use - IdiomSwipe",
    termsMetaDescription: "Terms of Use for IdiomSwipe.",
    brandAria: "IdiomSwipe home",
    menuAria: "Open menu",
    proofAria: "Product highlights",
    privacyListAria: "Privacy summary",
    navHome: "Home",
    navFeatures: "Features",
    navPrivacy: "Privacy",
    navTerms: "Terms",
    navPrivacyPolicy: "Privacy Policy",
    navTermsFull: "Terms of Use",
    heroEyebrow: "English and Turkish expressions",
    heroTitle: "Learn expressions people actually use.",
    heroText: "Build natural English and Turkish with short swipe cards, clear meanings, cultural equivalents, and quick practice that fits into the day.",
    heroPrimary: "Coming soon on the App Store",
    heroSecondary: "Explore features",
    proofLocal: "Local-first",
    proofBilingual: "Bilingual",
    proofQuizzes: "Mini quizzes",
    heroImageAlt: "IdiomSwipe app preview with swipe cards, progress, and mini lessons",
    featuresEyebrow: "A simple learning loop",
    featuresTitle: "Discover, swipe, remember, speak.",
    featureOneTitle: "Find natural meaning",
    featureOneText: "Learn idioms, phrasal verbs, proverbs, Turkish deyimler, atasozleri, and cultural pairs with plain explanations.",
    featureTwoTitle: "Swipe fast",
    featureTwoText: "Sort each card as known, learning, favorite, or review later without breaking your flow.",
    featureThreeTitle: "Practice quickly",
    featureThreeText: "Turn expressions into short quizzes, reinforce memory, and keep streaks, XP, and progress visible.",
    featureFourTitle: "Review smarter",
    featureFourText: "Return to expressions at the right time and keep the phrases you want to use in real conversations.",
    contentEyebrow: "Made for real conversation",
    contentTitle: "Not word-for-word translation.",
    contentText: "IdiomSwipe focuses on the phrases that make speech sound natural: everyday idioms, workplace expressions, useful proverbs, and the closest bilingual equivalents when a literal translation is not enough.",
    privacyEyebrow: "Privacy-first by design",
    privacyTitle: "Your learning stays on your device.",
    privacyText: "IdiomSwipe v1 is local-first. There is no account system, tracking, backend, or external API in the app. Learning progress, favorites, review state, and settings are stored locally on device.",
    privacyItemLogin: "No login",
    privacyItemAds: "No advertising ID",
    privacyItemAnalytics: "No third-party analytics",
    privacyItemPurchases: "Apple-managed purchases",
    downloadEyebrow: "App Store ready",
    downloadTitle: "Swipe to speak like a native.",
    downloadText: "Use these links for App Store privacy and subscription review metadata.",
    legalUpdated: "Last updated: June 17, 2026",
    privacyPageTitle: "Privacy Policy",
    privacyIntro: "IdiomSwipe is designed as a local-first learning app for English and Turkish expressions. This policy explains what the app stores and what it does not collect.",
    privacyStoredTitle: "Information stored on your device",
    privacyStoredText: "The app may store your learning direction, progress, XP, streaks, favorites, review state, quiz results, daily usage counters, app language preference, and subscription entitlement state locally on your device.",
    privacyNoTrackingTitle: "No account, tracking, or backend in v1",
    privacyNoTrackingText: "IdiomSwipe v1 does not include account registration, a backend service, third-party analytics, advertising tracking, external AI APIs, or advertising identifiers.",
    privacyPurchasesTitle: "Purchases",
    privacyPurchasesText: "Subscriptions and purchases are handled by Apple through StoreKit and your Apple ID. IdiomSwipe does not receive or store your payment card details.",
    privacyDeviceTitle: "Device features",
    privacyDeviceText: "The app may use on-device features such as speech playback, haptics, local notifications if enabled, and local storage for learning progress. These features are used only to provide the app experience.",
    privacyDeleteTitle: "Deleting data",
    privacyDeleteText: "You can remove local IdiomSwipe data by deleting the app from your device. Some device-level backups or Apple account purchase records may be managed by Apple according to your Apple settings.",
    privacyChildrenTitle: "Children's privacy",
    privacyChildrenText: "IdiomSwipe does not knowingly collect personal information from children. Because the app is local-first and has no account system in v1, the developer does not operate a user database for the app.",
    legalChangesTitle: "Changes",
    privacyChangesText: "This policy may be updated when the app adds new features or services. The latest version will be posted on this page.",
    legalContactTitle: "Contact",
    privacyContactText: "For support or privacy questions, use the developer contact method listed on the IdiomSwipe App Store page.",
    termsPageTitle: "Terms of Use",
    termsIntro: "These Terms apply to the IdiomSwipe iOS app and this website. By using IdiomSwipe, you agree to these Terms.",
    termsLicenseTitle: "App license",
    termsLicenseText: "IdiomSwipe is licensed, not sold. If you download the app from the App Store, Apple's Standard End User License Agreement applies unless a separate custom license is provided.",
    termsEulaLink: "Apple Standard EULA",
    termsLearningTitle: "Learning content",
    termsLearningText: "IdiomSwipe provides educational language-learning content for practice and reference. Meanings, translations, examples, and cultural equivalents are intended to help learning and may not cover every possible context.",
    termsSubscriptionsTitle: "Subscriptions and purchases",
    termsSubscriptionsText: "Some features may require IdiomSwipe Pro. Subscription prices, trial availability, renewal terms, and purchase confirmation are shown in Apple's purchase sheet before payment.",
    termsRenewalText: "Subscriptions renew automatically unless canceled through your Apple ID settings. Apple handles billing, cancellations, refunds, and payment processing.",
    termsUseTitle: "Acceptable use",
    termsUseText: "You agree not to misuse the app, attempt to reverse engineer it except where allowed by law, interfere with its operation, or use its content in a way that violates applicable law or third-party rights.",
    termsGuaranteeTitle: "No guarantee",
    termsGuaranteeText: "The app is provided for educational use. IdiomSwipe does not guarantee that every phrase, translation, example, or review schedule will be error-free or suitable for every situation.",
    termsChangesText: "These Terms may be updated when the app changes. The latest version will be posted on this page.",
    termsContactText: "For support questions, use the developer contact method listed on the IdiomSwipe App Store page."
  },
  tr: {
    homeMetaTitle: "IdiomSwipe - Gerçek hayatta kullanılan ifadeleri öğren",
    homeMetaDescription: "IdiomSwipe; İngilizce ve Türkçe deyimleri, phrasal verbleri, atasözlerini ve kültürel karşılıkları hızlı kartlar ve mini quizlerle öğrenmeni sağlar.",
    privacyMetaTitle: "Gizlilik Politikası - IdiomSwipe",
    privacyMetaDescription: "IdiomSwipe Gizlilik Politikası.",
    termsMetaTitle: "Kullanım Koşulları - IdiomSwipe",
    termsMetaDescription: "IdiomSwipe Kullanım Koşulları.",
    brandAria: "IdiomSwipe ana sayfa",
    menuAria: "Menüyü aç",
    proofAria: "Ürün öne çıkanları",
    privacyListAria: "Gizlilik özeti",
    navHome: "Ana Sayfa",
    navFeatures: "Özellikler",
    navPrivacy: "Gizlilik",
    navTerms: "Koşullar",
    navPrivacyPolicy: "Gizlilik Politikası",
    navTermsFull: "Kullanım Koşulları",
    heroEyebrow: "İngilizce ve Türkçe ifadeler",
    heroTitle: "Gerçek hayatta kullanılan ifadeleri öğren.",
    heroText: "Kısa kartlar, net anlamlar, kültürel karşılıklar ve gün içine sığan hızlı alıştırmalarla doğal İngilizce ve Türkçe geliştir.",
    heroPrimary: "Yakında App Store'da",
    heroSecondary: "Özellikleri keşfet",
    proofLocal: "Yerel öncelikli",
    proofBilingual: "İki dilli",
    proofQuizzes: "Mini quizler",
    heroImageAlt: "Kaydırmalı kartlar, ilerleme ve mini dersler içeren IdiomSwipe uygulama önizlemesi",
    featuresEyebrow: "Basit öğrenme döngüsü",
    featuresTitle: "Keşfet, kaydır, hatırla, konuş.",
    featureOneTitle: "Doğal anlamı yakala",
    featureOneText: "Deyimleri, phrasal verbleri, atasözlerini, Türkçe deyimleri ve kültürel eşleşmeleri sade açıklamalarla öğren.",
    featureTwoTitle: "Hızlı kaydır",
    featureTwoText: "Akışı bozmadan kartları biliyorum, öğreniyorum, favori ya da sonra tekrar et olarak ayır.",
    featureThreeTitle: "Kısa pratik yap",
    featureThreeText: "İfadeleri mini quizlere dönüştür, hafızanı güçlendir; seri, XP ve ilerlemeni görünür tut.",
    featureFourTitle: "Daha akıllı tekrar et",
    featureFourText: "İfadeye doğru zamanda geri dön ve gerçek konuşmalarda kullanmak istediğin cümleleri elinin altında tut.",
    contentEyebrow: "Gerçek konuşma için",
    contentTitle: "Kelime kelime çeviri değil.",
    contentText: "IdiomSwipe konuşmanı doğal yapan ifadelere odaklanır: günlük deyimler, iş hayatında geçen kalıplar, işe yarar atasözleri ve birebir çevirinin yetmediği yerde en yakın iki dilli karşılıklar.",
    privacyEyebrow: "Gizlilik odaklı tasarım",
    privacyTitle: "Öğrenme verilerin cihazında kalır.",
    privacyText: "IdiomSwipe v1 yerel önceliklidir. Uygulamada hesap sistemi, takip, backend ya da harici API yoktur. Öğrenme ilerlemesi, favoriler, tekrar durumu ve ayarlar cihazda yerel olarak saklanır.",
    privacyItemLogin: "Giriş yok",
    privacyItemAds: "Reklam kimliği yok",
    privacyItemAnalytics: "Üçüncü taraf analiz yok",
    privacyItemPurchases: "Satın almalar Apple üzerinden",
    downloadEyebrow: "App Store için hazır",
    downloadTitle: "Ana dili gibi konuşmak için kaydır.",
    downloadText: "App Store gizlilik ve abonelik inceleme bilgileri için bu bağlantıları kullan.",
    legalUpdated: "Son güncelleme: 17 Haziran 2026",
    privacyPageTitle: "Gizlilik Politikası",
    privacyIntro: "IdiomSwipe, İngilizce ve Türkçe ifadeler için yerel öncelikli bir öğrenme uygulaması olarak tasarlanmıştır. Bu politika uygulamanın ne sakladığını ve ne toplamadığını açıklar.",
    privacyStoredTitle: "Cihazında saklanan bilgiler",
    privacyStoredText: "Uygulama; öğrenme yönünü, ilerlemeyi, XP'yi, serileri, favorileri, tekrar durumunu, quiz sonuçlarını, günlük kullanım sayaçlarını, uygulama dili tercihini ve abonelik erişim durumunu cihazında yerel olarak saklayabilir.",
    privacyNoTrackingTitle: "v1'de hesap, takip veya backend yok",
    privacyNoTrackingText: "IdiomSwipe v1; hesap kaydı, backend servisi, üçüncü taraf analiz, reklam takibi, harici yapay zeka API'leri veya reklam kimlikleri içermez.",
    privacyPurchasesTitle: "Satın almalar",
    privacyPurchasesText: "Abonelikler ve satın almalar Apple tarafından StoreKit ve Apple ID üzerinden yönetilir. IdiomSwipe ödeme kartı bilgilerini almaz veya saklamaz.",
    privacyDeviceTitle: "Cihaz özellikleri",
    privacyDeviceText: "Uygulama; ses oynatma, dokunsal geri bildirim, etkinleştirilirse yerel bildirimler ve öğrenme ilerlemesi için yerel depolama gibi cihaz özelliklerini kullanabilir. Bu özellikler yalnızca uygulama deneyimi için kullanılır.",
    privacyDeleteTitle: "Verileri silme",
    privacyDeleteText: "Yerel IdiomSwipe verilerini uygulamayı cihazından silerek kaldırabilirsin. Bazı cihaz yedekleri veya Apple hesabı satın alma kayıtları Apple ayarlarına göre Apple tarafından yönetilebilir.",
    privacyChildrenTitle: "Çocukların gizliliği",
    privacyChildrenText: "IdiomSwipe çocuklardan bilerek kişisel bilgi toplamaz. Uygulama v1'de yerel öncelikli olduğu ve hesap sistemi içermediği için geliştirici uygulama için kullanıcı veritabanı işletmez.",
    legalChangesTitle: "Değişiklikler",
    privacyChangesText: "Bu politika, uygulamaya yeni özellikler veya servisler eklendiğinde güncellenebilir. En güncel sürüm bu sayfada yayınlanır.",
    legalContactTitle: "İletişim",
    privacyContactText: "Destek veya gizlilik soruları için IdiomSwipe App Store sayfasında listelenen geliştirici iletişim yöntemini kullan.",
    termsPageTitle: "Kullanım Koşulları",
    termsIntro: "Bu Koşullar IdiomSwipe iOS uygulaması ve bu internet sitesi için geçerlidir. IdiomSwipe'ı kullanarak bu Koşulları kabul etmiş olursun.",
    termsLicenseTitle: "Uygulama lisansı",
    termsLicenseText: "IdiomSwipe satılmaz, lisanslanır. Uygulamayı App Store'dan indirirsen ayrı bir özel lisans sağlanmadığı sürece Apple'ın Standart Son Kullanıcı Lisans Sözleşmesi geçerlidir.",
    termsEulaLink: "Apple Standart EULA",
    termsLearningTitle: "Öğrenme içeriği",
    termsLearningText: "IdiomSwipe pratik ve başvuru amacıyla eğitim odaklı dil öğrenme içeriği sunar. Anlamlar, çeviriler, örnekler ve kültürel karşılıklar öğrenmeye yardımcı olmak içindir ve her bağlamı kapsamayabilir.",
    termsSubscriptionsTitle: "Abonelikler ve satın almalar",
    termsSubscriptionsText: "Bazı özellikler IdiomSwipe Pro gerektirebilir. Abonelik fiyatları, deneme uygunluğu, yenileme koşulları ve satın alma onayı ödeme öncesinde Apple satın alma ekranında gösterilir.",
    termsRenewalText: "Abonelikler Apple ID ayarlarından iptal edilmediği sürece otomatik yenilenir. Faturalandırma, iptaller, iadeler ve ödeme işlemleri Apple tarafından yönetilir.",
    termsUseTitle: "Kabul edilebilir kullanım",
    termsUseText: "Uygulamayı kötüye kullanmamayı, yasanın izin verdiği durumlar dışında tersine mühendislik yapmamayı, çalışmasına müdahale etmemeyi ve içeriğini yürürlükteki yasaları veya üçüncü taraf haklarını ihlal edecek şekilde kullanmamayı kabul edersin.",
    termsGuaranteeTitle: "Garanti yok",
    termsGuaranteeText: "Uygulama eğitim amacıyla sunulur. IdiomSwipe her ifade, çeviri, örnek veya tekrar planının hatasız ya da her durum için uygun olacağını garanti etmez.",
    termsChangesText: "Bu Koşullar uygulama değiştikçe güncellenebilir. En güncel sürüm bu sayfada yayınlanır.",
    termsContactText: "Destek soruları için IdiomSwipe App Store sayfasında listelenen geliştirici iletişim yöntemini kullan."
  }
};

function applyLanguage(lang) {
  const activeLang = translations[lang] ? lang : "en";
  const dictionary = translations[activeLang];
  const page = document.body.dataset.page || "home";

  document.documentElement.lang = activeLang;
  document.title = dictionary[`${page}MetaTitle`] || dictionary.homeMetaTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", dictionary[`${page}MetaDescription`] || dictionary.homeMetaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = dictionary[element.dataset.i18nAlt];
    if (value) element.setAttribute("alt", value);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === activeLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem(storageKey, activeLang);
}

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem(storageKey);
  if (translations[savedLanguage]) return savedLanguage;
  return navigator.language.toLowerCase().startsWith("tr") ? "tr" : "en";
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langOption);
  });
});

applyLanguage(getInitialLanguage());
