Object.size = function(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function fill_languages() {
    var element = "";
    $(".lang-wrap div.s_grid").html("");
    for (var i = 0; i < Object.size(languages); i++) {
        element = `<div class="lang">
            <img class="lang-img" width="100%" height="100%" src="./assets/img/language/` + languages[i].img + `" alt="">
            <div class="lang-desc">` + languages[i].name + `</div>
            <div class="lang-rate">
            <div class="rate-wrap">`;
        for (var s = 0; s < languages[i].rate; s++) {
            element += `<i class="bi bi-circle-fill"></i>`;
        }
        for (var s = 0; s < 5 - languages[i].rate; s++) {
            element += `<i class="bi bi-circle"></i>`;
        }
        element += `</div>
            </div>
            </div>`;

        $(".lang-wrap div.s_grid").append(element);
    }
}

function fill_skills() {
    var element = "";
    $(".skill-wrap div.s_grid").html("");
    for (var i = 0; i < Object.size(skills); i++) {
        element = `<div class="skill">
            <img class="skill-img" width="100%" height="100%" src="./assets/img/skill/` + skills[i].img + `" alt="">
            <div class="skill-desc">` + skills[i].name + `</div>
            <div class="skill-rate">
            <div class="rate-wrap">`;
        for (var s = 0; s < skills[i].rate; s++) {
            element += `<i class="bi bi-circle-fill"></i>`;
        }
        for (var s = 0; s < 5 - skills[i].rate; s++) {
            element += `<i class="bi bi-circle"></i>`;
        }
        element += `</div>
            </div>
            </div>`;

        $(".skill-wrap div.s_grid").append(element);
    }
}

function fill_expertise() {
    var element = "";
    $(".R_t").remove();
    for (var i = 0; i < Object.size(expertise); i++) {
        element = `<div class="R_t">
        <div class="R_date">` + expertise[i].date + `</div>
        <div class="R_e">
            <h2 class="R_e_t">` + expertise[i].title + `</h2> <span class="work_descr">` + expertise[i].description + `</span></div>
        </div>`;
        $(".e_wrap").append(element);
    }
}



function show_loader() {
    $('.loader').show();
    $(document).ready(function() {
        if (fill_with_script) {
            window.document.title = Devoloper + " | " + Profession;
            $('.p_header h1').html(Devoloper);
            $('.p_header span').html(Profession);
            $('.descr-text').html(About);
            $('.profile_pic').attr("src", "./assets/img/" + profile);
            $('#email').html(contact.email);
            $('#phone').html(contact.phone);
            $('#facebook').html(contact.facebook);
            $('#twitter').html(contact.twitter);
            fill_expertise();
            fill_skills();
            fill_languages();
        }
    });
    setTimeout(function() {
        $('.loader').fadeOut('slow');
    }, 3000);
}

$(document).ready(function() {
    show_loader();
    $('.profile-wrap').on('click', function(e) {
        $('html, body').animate({ scrollTop: $('#about').position().top }, 'slow');
    });
});