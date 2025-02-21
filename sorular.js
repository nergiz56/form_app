class Soru {
    constructor(soruMetni, icon) {
        this.soruMetni = soruMetni;
        this.icon = icon;  
        
    }
}

let sorular = [
    new Soru("Adınız", "fa-user"),              
    new Soru("Soyadınız", "fa-user"),             
    new Soru("E-posta Adresiniz", "fa-envelope"), 
    new Soru("Mezun olduğunuz üniversite", "fa-graduation-cap"),
    new Soru("Mezun veya öğrenci olduğunuz bölüm", "fa-book"),
    new Soru("Özel ders tecrübe yılınız", "fa-chalkboard-teacher"),
    new Soru("Listelemek istediğiniz ana kategori", "fa-list"),
    new Soru("Hangi dersi veriyorsunuz", "fa-book-open"),
    new Soru("Ders süresi", "fa-clock"),
    new Soru("Ders formatı", "fa-video"),
    new Soru("Ders ücreti", "fa-money-bill-wave"),
    new Soru("Ders verdiğiniz şehir", "fa-map-marker-alt"),
    new Soru("İlk dersiniz ücretsiz mi", "fa-gift"),
    new Soru("Profil fotoğrafı", "fa-camera"),
    new Soru("Kendinizi kısaca tanıtın", "fa-comment")
];



