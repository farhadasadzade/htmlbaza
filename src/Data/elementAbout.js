export let elementAbout = [
    {
        about: 'Saytdakı başqa bir səhifəyə keçid yaratmaq üçün istifadə olunur. Ayrıca, bu etiket səhifədəki hər hansı bir elementə keçmək üçün bir çapa kimi istifadə edilə bilər.',
        codeText: '<a href="#">Link</a>',
    },
    {
        about: 'Qısaltmanı göstərmək üçün istifadə olunur',
        codeText: '<abbr>HTML</abbr>'
    },
    {
        about: 'Əlaqə məlumatlarının dəqiqləşdirilməsi. Defolt olaraq kursivləşdirilmişdir. Semantik etiket.',
        codeText: `<address>
    <p>Пишите нам на email: info@company.ru</p>
    <p>Звоните: +9955142525</p>
    <p>Адрес: Страна, город, улица</p>
</address>`
    },
    {
        about: 'Şəkildə aktiv sahəni (img) müəyyən edir, onunla bu sahəyə hadisələr əlavə edə, həmçinin hiperlink təyin edə bilərsiniz. area yalnız map elementinin daxilində istifadə olunur',
        codeText: `<map name="html5-css3">
    <area shape="rect" coords="0,0,150,162" href="#css" alt="css" onclick="alert('hello css')"></area>
    <area shape="rect" coords="150,0,300,162" href="#html" alt="html" onclick="alert('hello html')"></area>
</map>
<img src="https://htmlbase.ru/storage/app/media/html5-css3.png" alt="" usemap="#html5-css3"></img>`
    },
    {
        about: 'Saytdakı məqalə və ya xəbərlər. Etiketin içərisində h1-h6 başlığının olması mütləqdir. Semantik etiket.',
        codeText: `<article>
    <h1>Заголовок статьи</h1>
    <p>Текст статьи</p>
</article>`
    },
    {
        about: 'Saytın kənar paneli (sidebar - yan panel) və ya məqalə üçün etiket və ya alt qeyd kimi blokun ikinci dərəcəli elementi yaratmaq üçün istifadə olunur. Semantik etiket.',
        codeText: `<main>
    <h1>Главная часть сайта</h1>
    <p>Текст главной части сайта</p>
</main>
<aside>
    <h3>Об авторе</h3>
    <p>Текст об авторе</p>
</aside>`
    },
    {
        about: 'Səhifəyə audio faylları yerləşdirmək.',
        codeText: `<audio src="https://htmlbase.ru/storage/app/media/Swoop.mp3" controls></audio>`
    },
    {
        about: 'Qalın mətn',
        codeText: `<p>Обратите внимание <b>на этот текст</b></p>`
    },
    {
        about: 'Nisbi bağlantılar yaratmaq üçün səhifənin əsas URL-ni təyin edir. Head etiketinə yerləşdirilir.',
        codeText: `<base href="http://localhost:3000"></base>
<a href="/a">Ссылка</a> - Создаст ссылку в виде https://htmlbase.ru/html/a`
    },
    {
        about: 'Sitat göstəricisi. Mətndə sitatlar və ya saytınızdakı rəylər üçün istifadə olunur. Varsayılan olaraq, hər tərəfdən margin var.',
        codeText: `<blockquote>Какая-то умная фраза какого-нибудь философа</blockquote>`
    },
    {
        about: 'Səhifənin məzmununu müəyyənləşdirir. Səhifənin sənəd skeleti yaradılarkən istifadə olunur. html teqinin uşaq elementi',
        codeText: `<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <title>Заголовок</title>
    </head>
    <body>
        Содержимое страницы
    </body>
</html>`
    },
    {
        about: 'Mətni yeni sətirə keçirmək',
        codeText: `<p>Текст на одной строке<br>текст на другой строке</p>`
    },
    {
        about: 'Düymənin yaradılması. Formalarla işləmək və ya javascript hadisələrini çağırmaq üçün düymələr yaratmaq üçün istifadə olunur. Defolt üsluba malikdir.',
        codeText: `<button>Нажми сюда</button>`
    },
    {
        about: 'Javascript-dən istifadə edərək həm 2D, həm də 3D dinamik qrafiklərin çəkilməsi üçün sahənin yaradılması.',
        codeText: `<canvas width="200" height="100" id="draw" style="background-color: #c5def1;">
    Ваш браузер не поддерживает canvas.
</canvas>`
    },
    {
        about: 'Cədvəlin başlığını təyin edir',
        codeText: `<table style="width: 100%;">
    <caption>Заголовок таблицы</caption>
    <tr>
        <td>...</td>
        <td>...</td>
        <td>...</td>
    </tr>
</table>`
    },
    {
        about: 'Bir şeyin mənbəyini, sitatın müəllifini və ya rəyin müəllifini göstərir. Standart üslub kursivdir.',
        codeText: `<blockquote>Чья-то умная фраза</blockquote>
<cite>Автор фразы</cite>
        
<p>Больше умных фраз вы найдете на сайте <cite>frazi.ru</cite></p>`
    },
    {
        about: 'Mətndə kod parçası. Əmrlər, texniki şərtlər və s. üçün istifadə edilə bilər. Standart şrift Monospace-dir.',
        codeText: `<p>Укажите в атрибуте <code>href</code> ссылку на страницу.</p>`
    },
    {
        about: 'Cədvəldə sütun müəyyən edir və xanaların ümumi semantikasını və üslubunu müəyyən etmək üçün istifadə olunur. Colgroup elementi daxilində istifadə olunur.',
        codeText: `<table>
    <colgroup span="4">
        <col span="2" class="bg-green">
        <col span="2" class="bg-red">
    </colgroup>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
    </tr>
</table>`
    },
    {
        about: 'Cədvəldə sütunlar qrupunu müəyyən edir. Col etiketi ilə birlikdə istifadə olunur.',
        codeText: `<table>
    <colgroup span="4">
        <col span="2" class="bg-green">
        <col span="2" class="bg-red">
    </colgroup>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
    </tr>
</table>`
    },
    {
        about: 'Verilmiş input fokuslandıqda görünən input etiketi üçün açılan siyahı. Yazdığınız simvollara görə çeşidlənmiş daxiletmə seçimlərini göstərməyə imkan verir.',
        codeText: `<label for="city">Введите город:</label>
<input list="city-list" id="city" name="city">
        
<datalist id="city-list">
    <option value="Москва">
    <option value="Рига">
</datalist>`
    },
    {
        about: 'dd (təsvir təfərrüatları) teqi dl siyahısı yaradarkən istifadə olunur və dt teqində göstəriləcək terminin təsviri ilə element yaradır.',
        codeText: `<dl>
    <dt>HTML</dt>
    <dd>Язык гипертекстовой разметки, служит для создания HTML страниц</dd>
    <dt>CSS</dt>
    <dd>Каскадные таблицы стилей, служат для стилизации элементов HTML страницы</dd>
</dl>`
    },
    {
        about: 'Sənəddən çıxarılıb başqa bir şeylə əvəz edilmiş mətn parçası. Tez-tez onlayn mağazalarda köhnə qiymətlər üçün istifadə olunur. Vizual olaraq mətn üstündən xətt çəkiləcək.',
        codeText: `<p>Данное событие произошло <del>22</del> 23 июня</p>`
    },
    {
        about: 'Native akkordeon. summary etiketi ilə birlikdə işləyir.',
        codeText: `<details>
    <summary>Как выучить HTML?</summary>
    <p>Учиться на htmlbase.ru</p>
</details>`
    },
    {
        about: 'Səhifədə ilk dəfə baş verən tərif və ya terminin vurğulanması. Defolt kursiv üslubu var',
        codeText: `<p><dfn>Джун</dfn> - так называют начинающего разработчика в современном мире.</p>`
    },
    {
        about: 'Sayt məzmunu üçün universal konteyner. Sayt strukturunu yaratmaq üçün istifadə olunur.',
        codeText: `<div>
    <p>Какой-то текст</p>
</div>`
    },
    {
        about: 'dl (təsvir siyahısı) teqi onun elementlərinin ətraflı izahı ilə siyahı yaradır. dt və dd teqləri ilə birlikdə işləyir.',
        codeText: `<dl>
    <dt>HTML</dt>
    <dd>Язык гипертекстовой разметки, служит для создания HTML страниц</dd>
    <dt>CSS</dt>
    <dd>Каскадные таблицы стилей, служат для стилизации элементов HTML страницы</dd>
</dl>`
    },
    {
        about: 'dt (təsvir termini) teqi dl siyahısı yaratarkən istifadə olunur və dd teqində izah ediləcək terminin adı ilə element yaradır.',
        codeText: `<dl>
    <dt>HTML</dt>
    <dd>Язык гипертекстовой разметки, служит для создания HTML страниц</dd>
    <dt>CSS</dt>
    <dd>Каскадные таблицы стилей, служат для стилизации элементов HTML страницы</dd>
</dl>`
    },
    {
        about: 'Mətn parçası üçün vurğu təyin edir. Varsayılan olaraq kursivlə yazılmışdır.',
        codeText: `<p>Обычный текст, а <em>данный текст</em> с акцентом!</p>`
    },
    {
        about: 'Faylların və ya xarici resursların səhifəyə yerləşdirilməsi.',
        codeText: `<embed src="https://www.youtube.com/embed/xxxxxx" width="640" height="480">
        `
    },
    {
        about: 'Forma sahələri qrupu yaradın. legend etiketi ilə birlikdə istifadə olunur. Defolt tərtibatı var.',
        codeText: `<fieldset>
        <legend>Личные данные</legend>
        
        <input type="text" name="name" placeholder="Имя"></input>
        <input type="text" name="sname" placeholder="Фамилия"></input>
    </fieldset>`
    },
    {
        about: 'figure üçün başlıq.',
        codeText: `<figure>
    <img src="https://htmlbase.ru/storage/app/media/travel.jpg" alt=""></img>
    <figcaption>Путешествие по миру</figcaption>
</figure>`
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
    {
        about: '',
        codeText: ``
    },
]