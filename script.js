// ==UserScript==
// @name         ASM THEME
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  Скрипт светлой и темной темы для АСМ.
// @author       catemohi
// @match        http://188.134.75.181/*
// @icon         data:image/png;base64,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
// @grant        none
// ==/UserScript==

//Links
const ALARM_LINK_VAR = 'http://188.134.75.181/mon/';
const ALARM_LINK = 'http://188.134.75.181/mon/index.php';
const MONITORING_LINK = 'http://188.134.75.181/mon/sub_mon.php'
const PROJECTS_LINK = 'http://188.134.75.181/mon/projects.php'
const ARCHIVE_LINK = 'http://188.134.75.181/mon/archive.php'
const BASE_LINK = 'http://188.134.75.181/mon/mon_base.php'
const currentLink = location.href;

// Vars
const MAIN_TITLE_SITE = 'АСМ';
const FAVICON =
      '<link type="image/png" sizes="64x64" rel="icon"'+
      'href="https://img.icons8.com/external-soft-fill'+
      '-juicy-fish/344/external-scan-sales-soft-fill-s'+
      'oft-fill-juicy-fish.png">'
const whiteTheme =
      '--switcher-bg-color: #D4D9D4;'+
      '--main-bg-color: #EAECEA;'+
      '--alt-bg-color: #FFF;'+
      '--row-bg-color: #DFE2DF;'+
      '--row-title-bg-color: #D4D9D4;'+
      '--row-bg-even-color: #EAECEA;'+
      '--green-color: #6cbd7d;'+
      '--green-hvr-color: #4CA960;'+
      '--red-color: #E01A4F;'+
      '--red-color-hvr: #C91847;'+
      '--red-bg-color: #F49090;'+
      '--blue-color: #3977ad;'+
      '--row-border-color: #BFC5BF;'+
      '--text-color: #101319;'+
      '';
const darkTheme =
      '--switcher-bg-color: #6cbd7d;'+
      '--main-bg-color: #101319;'+
      '--alt-bg-color: #EAECEA;'+
      '--row-bg-color: #181C26;'+
      '--row-bg-even-color: #282F3E;'+
      '--row-title-bg-color: #1f2531;'+
      '--green-color: #6cbd7d;'+
      '--green-hvr-color: #4CA960;'+
      '--red-color: #E01A4F;'+
      '--red-color-hvr: #C91847;'+
      '--red-bg-color: #fe3266;'+
      '--blue-color: #4789C2;'+
      '--row-border-color: #cccccc;'+
      '--text-color: #EAECEA;'+
      '';
const FONT_FAMILY = 'Geneva, Arial, Helvetica, sans-serif';
const GREEN_COLOR = 'var(--green-color)';
const BLUE_COLOR = 'var(--blue-color)';
const RED_COLOR = 'var(--red-color)';
const RED_COLOR_HOVER = 'var(--red-color-hvr)';
const BACKGROUND_RED_COLOR = 'var(--red-bg-color)';
const WHITE_COLOR = 'var(--alt-bg-color)';
const BODY_BACKGROUND_COLOR = 'var(--main-bg-color)';
const ROW_BACKGROUND_COLOR = 'var(--row-bg-color)';
const ROW_EVEN_BACKGROUND_COLOR = 'var(--row-bg-even-color)';
const ROW_BORDER_COLOR = 'var(--row-border-color)';
const LOGIN_TITLE_COLOR = 'var(--blue-color)';
const LOGIN_BUTTON_HOVER_BACKGROUND_COLOR = 'var(--green-hvr-color)';
const LOGIN_BUTTON_BACKGROUND_COLOR = 'var(--green-color)';
const LOGIN_BUTTON_TEXT_COLOR = 'var(--alt-bg-color)';
const TITLE_ROW_BACKGROUND_COLOR = 'var(--row-title-bg-color)';
const BUTTON_BACKGROUND_COLOR = 'transparent';
const BUTTON_TEXT_COLOR = 'transparent';
const TIME_STAMP_COLOR = 'var(--green-color)';
const TEXT_COLOR = 'var(--text-color)';
const PROJECT_NAME_COLOR = 'var(--text-color)';
const MENU_LINK_COLOR = 'var(--blue-color)';
const LOGIN_TITLE_FONT_SIZE = '36px';
const TEXT_FONT_SIZE = '14px';
const LOGIN_BUTTON_TEXT_FONT_SIZE = '16px';
const PROJECT_NAME_FONT_SIZE = '46px';
const MENU_LINK_FONT_SIZE = '18px';
const TIME_STAMP_FONT_SIZE = '18px';
const PROJECT_NAME_FONT_WIDTH = '700'
const MENU_LINK_FONT_WIDTH = '700';
const TIME_STAMP_FONT_WIDTH = '700';
const ROW_BOREDER_SETTING = `var(--row-border-color) 2px solid`;
const CELL_BOREDER_SETTING = `var(--row-bg-color) 2px solid`;
const CARD_BORDER_RADIUS = '22px';

//CSS
//LOGIN PAGE CSS
const login_body =
      `font-family: ${FONT_FAMILY};` +
      `background-color: ${BODY_BACKGROUND_COLOR};`+
      `color: ${TEXT_COLOR};` +
      `flex-direction: row;`+
      `display:flex;`+
      `justify-content:center;`+
      `box-sizing: border-box;`+
      `align-items:center;`;
const login_block =
      `background-color: ${ROW_BACKGROUND_COLOR};`+
      `border-radius: ${CARD_BORDER_RADIUS};`+
      `display:flex;`+
      `flex-direction: column;`+
      `width: 25%;`+
      `box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.2);`+
      `padding: 2% 3% 5% 3%;`;
const h4 =
      `font-size: ${LOGIN_TITLE_FONT_SIZE};`+
      `color: ${LOGIN_TITLE_COLOR};`+
      `margin: 0 0 10% 0;`+
      ``;
const login_form =
      `display:flex;`+
      `flex-direction: column;`+
      `margin: 0 0 0 0;`+
      ``;
const login_table =
      `width:100%;`+
      ``+
      ``;
const login_tr =
      `display:flex;`+
      `flex-direction: column;`+
      `margin: 0 0 6% 0;`+
      `background-color: ${BODY_BACKGROUND_COLOR};`+
      `border-radius: 12px;`+
      `padding: 2%;`+
      ``;
const loginTd =
      `font-size: 18px;`+
      ``;
const dataInput =
      `border: none;`+
      `width:100%;`+
      `font-size: 16px;`+
      `background-color: ${BODY_BACKGROUND_COLOR};`+
      `color: ${TEXT_COLOR};` +
      `margin: 1% 0 0 0;`;


const usernameInput =
      `color: ${TEXT_COLOR};` +
      ``+
      ``;
const loginButton =
      `background-color: ${LOGIN_BUTTON_BACKGROUND_COLOR};`+
      `color: ${LOGIN_BUTTON_TEXT_COLOR};`+
      `border: none;`+
      `padding: 22px 0;`+
      `transition: all 0.4s ease;`+
      `font-size: ${LOGIN_BUTTON_TEXT_FONT_SIZE};`+
      `border-radius: 12px;`+
      ``+
      ``;
const loginHoverButton =
      `background-color: ${LOGIN_BUTTON_HOVER_BACKGROUND_COLOR};`+
      `cursor: pointer;`+
      ``+
      ``;
const placeholder =
      `color: ${TEXT_COLOR}`+
      `opacity:0;`+
      `transition: all 0.4s ease;`+
      ``;
//PROJECT PAGE CSS
const project_table_first_column =
      `flex: 1 1 33.33%;`+
      ``+
      ``;
const project_table =
      `width: 40%;`+
      `margin: 0 0 2% 0;`+
      ``;
const project_form =
      `margin: 0;`+
      `width: 40%;;`+
      `display:flex;`+
      `flex-direction: column;`+
      ``;
const formContent =
      `display:flex;`+
      `padding: 2% 1%;`+
      `background-color: ${TITLE_ROW_BACKGROUND_COLOR};`+
      `gap: 2%;`+
      ``;
const project_body =
      `font-family: ${FONT_FAMILY};` +
      `background-color: ${BODY_BACKGROUND_COLOR};`+
      `color: ${TEXT_COLOR};` +
      `flex-direction: column;`+
      `display:flex;`+
      `justify-content:center;`+
      `box-sizing: border-box;`+
      `line-height: 1;`+
      `align-items:center;`;


const project_tr =
      `display:flex;`+
      `flex-direction: row;`+
      `background-color: ${ROW_BACKGROUND_COLOR};`+
      `border: ${ROW_BORDER_COLOR} 1px solid;`+
      `align-items:center;`+
      ``;
const project_tr_title =
      `background-color: ${TITLE_ROW_BACKGROUND_COLOR};`+
      `font-size: ${MENU_LINK_FONT_SIZE};`+
      `font-weight: ${MENU_LINK_FONT_WIDTH};`+
      ``+
      ``;
const project_tr_even =
      `background-color: ${ROW_EVEN_BACKGROUND_COLOR};`+
      ``+
      ``;
const projectNameTr =
      `line-height: 1.35;`+
      `text-transform: uppercase;`+
      ``;
const project_a =
      `text-decoration: none;`+
      `color: ${MENU_LINK_COLOR};`+
      `transition: all 0.3s ease;`+
      ``+
      ``;

const project_hover_a =
      `box-shadow: 0px -1px 0px 0px ${MENU_LINK_COLOR} inset;`+
      ``+
      ``;

const projectTd =
      `border: none;`+
      ``+
      ``;
const projectMainMenu =
      `font-size: ${MENU_LINK_FONT_SIZE};`+
      `font-weight: ${MENU_LINK_FONT_WIDTH};`+
      `color: ${MENU_LINK_COLOR};`+
      `display: flex;`+
      `justify-content: flex-end;`+
      `width: 40%;`+
      `margin: 0 0 3% 0;`+
      `line-height: 1.35;`+
      `text-transform: uppercase;`+
      `gap: 2%;`+
      ``+
      ``;

const projectMainMenuNonActiveLink =
      `padding: 0;`+
      `border:none;`+
      `color: ${MENU_LINK_COLOR};`+
      ``+
      ``;

const projectMainMenuActiveLink =
      `padding: 0;`+
      `border:none;`+
      `color: ${MENU_LINK_COLOR};`+
      ``+
      ``;

const projectP =
      `padding: 0;`+
      `margin: 0;`+
      `text-align: center;`+
      `align-self: center;`+
      `flex: 1 1 10%;`+
      ``;

const projectCreateNewProjectChildren =
      `border: 0;`+
      ``+
      ``;
const projectCreateNewProjectInput =
      `flex: 1 1 70%;`+
      `background-color: ${ROW_EVEN_BACKGROUND_COLOR};`+
      `font-size: ${LOGIN_BUTTON_TEXT_FONT_SIZE};`+
      `color: ${TEXT_COLOR};` +
      ``;
const projectCreateNewProjectButton =
      `flex: 1 1 20%;`+
      `background-color: ${LOGIN_BUTTON_BACKGROUND_COLOR};`+
      `color: ${LOGIN_BUTTON_TEXT_COLOR};`+
      `transition: all 0.4s ease;`+
      `font-size: ${LOGIN_BUTTON_TEXT_FONT_SIZE};`+
      `cursor: pointer;`+
      `border: 0;`+
      `padding: 1% 0.5%;`+
      ``;
const projectCreateNewProjectButtonHover =
      `background-color: ${LOGIN_BUTTON_HOVER_BACKGROUND_COLOR};`+
      ``;
//CSS Alarm Page
const alarmBody =
      `font-family: ${FONT_FAMILY};` +
      `background-color: ${BODY_BACKGROUND_COLOR};`+
      `color: ${TEXT_COLOR};` +
      `box-sizing: border-box;`+
      `flex-direction: column;`+
      `display: flex;`;
const alarmProjectName =
      `color: ${PROJECT_NAME_COLOR};`+
      `font-size: ${PROJECT_NAME_FONT_SIZE};`+
      `text-align:center;`+
      `margin: 0 0 3% 0;`+
      `font-weight: ${PROJECT_NAME_FONT_WIDTH};`;
const alarmTimeStamp =
      `color: ${TIME_STAMP_COLOR};`+
      `font-size: ${TIME_STAMP_FONT_SIZE};`+
      `width:100%;`+
      `text-align:center;`+
      `font-weight: ${TIME_STAMP_FONT_WIDTH};`;
const alarmMainMenu =
      `box-sizing: border-box;`+
      `background-color: ${BODY_BACKGROUND_COLOR};`+
      `font-size: ${MENU_LINK_FONT_SIZE};`+
      `font-weight: ${MENU_LINK_FONT_WIDTH};`+
      `color: ${MENU_LINK_COLOR};`+
      `display: flex;`+
      `justify-content: flex-start;`+
      `width: 100%;`+
      `margin: 0 0 0 0;`+
      `line-height: 1.35;`+
      `text-transform: uppercase;`+
      `gap: 2%;`+
      `padding: 2% 1%;`+
      `align-items: center;`+
      ``+
      ``;
const alarmTable =
      `flex-direction: column;`+
      `display: flex;`+
      `white-space: normal;`+
      `width:100%;`+
      `flex: 1 0 100%;`+
      ``;
const alarmTr =
      `background-color: ${ROW_BACKGROUND_COLOR};`+
      `border: ${ROW_BORDER_COLOR} 1px solid;`+
      `align-items:center;`+
      `width: 100%;`+
      ``;
const mainMenuExit =
      'order:4;'+
      `margin: auto 0 auto auto;`;
const tableHolder =
      `flex-direction: column;`+
      `display: flex;`+
      `width: 100%;`+
      `overflow: visible;`+
      ``;
const trChecked =
      `background-color: ${BACKGROUND_RED_COLOR};`;
//CSS Monitoring Page
const monitoringStatusColumn =
      `color: ${GREEN_COLOR};`+
      ``;
const tdFailClass =
      `color: ${RED_COLOR};`+
      ``;
// CSS Archive Page
const archiveForm =
      `box-sizing: border-box;`+
      `flex: 0 1 30%;`+
      `display: flex;`+
      `flex-direction: column;`+
      `padding: 3% 2%;`+
      `background-color: ${TITLE_ROW_BACKGROUND_COLOR};`+
      ``;
const archiveSelecters =
      `display: flex;`+
      `gap: 2%;`+
      `justify-content: center;`+
      ``;
const archiveTitle =
      `font-size: ${MENU_LINK_FONT_SIZE};`+
      `font-weight: ${MENU_LINK_FONT_WIDTH};`+
      `padding: 0;`+
      `margin: 0 0 5% 0;`+
      ``;
const archiveText =
      `padding: 0;`+
      `margin: 0 0 2% 0;`+
      ``;
const archiveButton =
      `padding: 3% 2%;`+
      `background-color: ${LOGIN_BUTTON_BACKGROUND_COLOR};`+
      `color: ${LOGIN_BUTTON_TEXT_COLOR};`+
      `transition: all 0.4s ease;`+
      `font-size: ${LOGIN_BUTTON_TEXT_FONT_SIZE};`+
      `cursor: pointer;`+
      `border: 0;`+
      `margin: 5% 0 0 0;`+
      ``;
const archiveP =
      `padding: 0;`+
      `margin: 0;`;

const archiveSpan =
      `flex: 1 1 2%;`+
      `padding: 0 1%;`+
      ``;

const archiveSpanInput =
      `flex: 1 1 48%;`+
      `background-color: ${ROW_EVEN_BACKGROUND_COLOR};`+
      `font-size: ${LOGIN_BUTTON_TEXT_FONT_SIZE};`+
      `border: 0;`+
      `color: ${TEXT_COLOR};` +
      ``;
const archiveSpanInputOther =
      `background-color: ${ROW_EVEN_BACKGROUND_COLOR};`+
      `font-size: ${LOGIN_BUTTON_TEXT_FONT_SIZE};`+
      `border: 0;`+
      `color: ${TEXT_COLOR};` +
      ``;
const archiveTd =
      `border: none;`+
      `padding:5px`+
      ``;
// CSS Base Page
const basePopup =
      `width: 100%;`+
      `height: 100%;`+
      `display: flex;`+
      `flex-direction: column;`+
      `background-color: ${ROW_BACKGROUND_COLOR};`+
      `border-radius: ${CARD_BORDER_RADIUS};`+
      `padding: 3%;`+
      `box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.2);`+
      `font-size: 12px;`;

const basePopupWrapp =
      `display: none;`+
      `background-color: ${ROW_BACKGROUND_COLOR};`+
      `border-radius: ${CARD_BORDER_RADIUS};`+
      `width: 50%;`+
      `height: 50%;`+
      `margin: 0;`+
      `position: absolute;`+
      `left: 50%;`+
      `top: 15%;`+
      `transform: translate(-50%);`+
      `z-index: 10;`;
const baseLi =
      `margin: 0;`+
      `padding: 0;`+
      `list-style: none;`+
      `margin: 1% 0;`;
const baseSpan =
      `font-weight: 700;`+
      `display: inline-block;`+
      `margin: 0.5% 0`;

const basePopupTitle =
      `font-size: ${MENU_LINK_FONT_SIZE};`+
      `font-weight: ${MENU_LINK_FONT_WIDTH};`+
      `margin:0 0 3% 0`+
      ``;
const basePopupText =
      `font-size: 13px;`+
      `margin:0 0 2% 0`+
      ``;
const basePopupTextArea =
      `border: 0;`+
      `background-color: ${BODY_BACKGROUND_COLOR};`+
      `width: 100%;`+
      `flex:1 1 100%;`+
      `margin:0 0 2% 0;`+
      `color: ${TEXT_COLOR};` +
      ``;
const basePopupButtonContainer =
      `width: 100%;`+
      `display: flex;`+
      `gap: 2%;`+
      ``;

const basePopupButtonAdd =
      `flex: 1 1 49%;`+
      `background-color: ${LOGIN_BUTTON_BACKGROUND_COLOR};`+
      `color: ${LOGIN_BUTTON_TEXT_COLOR};`+
      `transition: all 0.4s ease;`+
      `font-size: ${LOGIN_BUTTON_TEXT_FONT_SIZE};`+
      `cursor: pointer;`+
      `border: 0;`+
      `padding: 1.85% 1%;`+
      ``;

const basePopupButtonAddHover =
      `background-color: ${LOGIN_BUTTON_HOVER_BACKGROUND_COLOR};`+
      ``;
const basePopupButtonCancel =
      `flex: 1 1 49%;`+
      `background-color: ${RED_COLOR};`+
      `color: ${LOGIN_BUTTON_TEXT_COLOR};`+
      `transition: all 0.4s ease;`+
      `font-size: ${LOGIN_BUTTON_TEXT_FONT_SIZE};`+
      `cursor: pointer;`+
      `padding: 1.85% 1%;`+
      `border: 0;`+
      ``;

const basePopupButtonCancelHover =
      `background-color: ${RED_COLOR_HOVER};`+
      ``;
//Func
function appendThemeSwicher() {
    let themeSwitcher = document.createElement('div');
    themeSwitcher.classList.add('theme-switcher');
    let buttonThemeSwitcher = document.createElement('button');
    buttonThemeSwitcher.id = 'switch';
    buttonThemeSwitcher.setAttribute('onclick', "toggleTheme()");
    buttonThemeSwitcher.innerHTML = '<span class="material-symbols-rounded active">light_mode</span><span class="material-symbols-rounded">dark_mode</span>';
    buttonThemeSwitcher.classList.add('theme-switcher__button');
    themeSwitcher.append(buttonThemeSwitcher)
    document.body.prepend(themeSwitcher);
    let scriptNode = document.createElement("script");
    scriptNode.innerHTML =
        'function toggleTheme(){'+
        'if (localStorage.getItem("theme") === "theme-dark") {'+
        'setTheme("theme-light");'+
        '} else {'+
        'setTheme("theme-dark");'+
        '};'+
        'document.querySelectorAll("#switch span").forEach((elem) => {elem.classList.toggle("active")});'+
        'location.reload();'+
        '};'+
        'function setTheme(themeName) {'+
        'localStorage.setItem("theme", themeName);'+
        'document.documentElement.className = themeName;'+
        '};'+
        '(function () {'+
        'if (localStorage.getItem("theme") === "theme-dark") {'+
        'setTheme("theme-dark");'+
        'document.querySelectorAll("#switch span").forEach((elem) => {elem.classList.toggle("active")});'+
        '} else {'+
        'setTheme("theme-light");'+
        '};'+
        '})();';
    document.body.appendChild(scriptNode);

};
function headConf(){
    document.head.innerHTML += `<title>${MAIN_TITLE_SITE}</title>`;
    document.head.innerHTML += `${FAVICON}`;
    document.head.innerHTML += `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />`;

};

function changeTitle(newTitle){
    let title = document.head.querySelector('title');
    title.textContent = newTitle;
};

function addSelectorStyle(selector, cssStyle) {
    let styleNode = document.createElement("style");
    styleNode.textContent = `${selector}{${cssStyle}}`;
    document.head.appendChild(styleNode);
};

function loginPage(){
    changeTitle('АСМ. Вход');
    let title = document.body.querySelector('h4');
    if (title){
        title.textContent = 'Добро пожаловать в АСМ.';
        title.style.cssText = '';
    };
    let username = document.body.querySelector('input[name="username"]');
    if (username){
        username.setAttribute('placeholder', 'example');
    };
    let password = document.body.querySelector('input[name="password"]');
    if (password){
        password.setAttribute('placeholder', '********');
    };
    addSelectorStyle('.theme-switcher','display:none');
    addSelectorStyle('body', login_body);
    addSelectorStyle('div.login_block', login_block);
    addSelectorStyle('h4', h4);
    addSelectorStyle('form', login_form);
    addSelectorStyle('table', login_table);
    addSelectorStyle('tr', login_tr);
    addSelectorStyle('td', loginTd);
    addSelectorStyle('td input', dataInput);
    addSelectorStyle('input[type="submit"]',loginButton);
    addSelectorStyle('input[type="submit"]:hover',loginHoverButton);
    addSelectorStyle('input[name="username"]',usernameInput);
    addSelectorStyle('input:focus::placeholder',placeholder);


};

function projectsPage(){
    changeTitle('АСМ. Меню проектов');
    let brElements = document.body.querySelectorAll('br');
    if (brElements){brElements.forEach((br) => br.remove())};
    if (document.body.childNodes[5].textContent == '.'){
        document.body.childNodes[5].remove();
    };
    let shapka = document.body.querySelector('.shapka');
    if (shapka){
        shapka.before(shapka.children[0]);
        shapka.remove();
    };
    let createNewProjectCollection = document.body.querySelector('form div');
    if (createNewProjectCollection){
        createNewProjectCollection.classList.add('form-content');
        createNewProjectCollection.childNodes[0].remove();
        let element = document.createElement('p');
        element.textContent = 'Новый проект';
        createNewProjectCollection.prepend(element);
        let newProjectNameInfo = createNewProjectCollection.children[3];
        createNewProjectCollection.parentElement.append(newProjectNameInfo);
    };
    let projectName = document.createElement('div');
    projectName.classList.add('project_name');
    projectName.textContent = 'Проекты';
    document.body.querySelector('.main_menu').after(projectName);
    let newProject = document.body.querySelector('input[name="new_project_name"]');
    if (newProject){newProject.setAttribute('placeholder', 'Имя проекта')};
    addSelectorStyle('body', project_body);
    addSelectorStyle('table', project_table);
    addSelectorStyle('form', project_form);
    addSelectorStyle('tr', project_tr);
    addSelectorStyle('tr *', project_table_first_column);
    addSelectorStyle('tr.even', project_tr_even);
    addSelectorStyle('tbody tr:nth-child(1)', project_tr_title);
    addSelectorStyle('tr td:nth-child(1)', projectNameTr);
    addSelectorStyle('a', project_a);
    addSelectorStyle('a:hover', project_hover_a);
    addSelectorStyle('td', projectTd);
    addSelectorStyle('.main_menu', alarmMainMenu);
    addSelectorStyle('.main_menu_nonactive_link', projectMainMenuNonActiveLink);
    addSelectorStyle('.main_menu_active_link', projectMainMenuActiveLink);
    addSelectorStyle('.main_menu', 'justify-content: flex-end;');
    addSelectorStyle('.project_name', alarmProjectName);
    addSelectorStyle('p', projectP);
    addSelectorStyle('.form-content', formContent);
    addSelectorStyle('.form-content *', projectCreateNewProjectChildren);
    addSelectorStyle('.form-content input', projectCreateNewProjectInput);
    addSelectorStyle('.form-content button', projectCreateNewProjectButton);
    addSelectorStyle('.form-content button:hover', projectCreateNewProjectButtonHover);
    addSelectorStyle('input:focus::placeholder',placeholder);
    addSelectorStyle('@media (max-width: 1600px)', 'table,form { width: 50%;} td {padding:10px 5px;}');

};
function alarmPage(){
    changeTitle('АСМ. Аварии');
    let brElements = document.body.querySelectorAll('br');
    if (brElements){brElements.forEach((br) => br.remove());};
    document.body.childNodes[12].textContent = '';
    let commentBody = document.body.querySelector('#comment_body');
    let commentBodyWrapper = document.createElement('div');
    commentBodyWrapper.classList.add('comment_body-wrapper');
    commentBodyWrapper.id = 'comment_body-wrapper';
    commentBody.querySelectorAll('*').forEach((element) => commentBodyWrapper.append(element));
    commentBody.append(commentBodyWrapper);
    let textAreaWrapper = document.createElement('div');
    textAreaWrapper.classList.add('comment_body-wrapper__text-area-wrapper');
    let textArea = textAreaWrapper.append(document.body.querySelector('#comment_body_textarea'));
    commentBodyWrapper.append(textAreaWrapper);
    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('comment_body-wrapper__button-container');
    commentBodyWrapper.querySelectorAll('button').forEach((element) => buttonContainer.append(element));
    commentBodyWrapper.append(buttonContainer);
    commentBody.querySelector('#comment_bodyheader').textContent = 'Изменить комментарий к аварии';


    addSelectorStyle('body', alarmBody);
    addSelectorStyle('.main_menu', alarmMainMenu);
    addSelectorStyle('.main_menu_nonactive_link', projectMainMenuNonActiveLink);
    addSelectorStyle('.main_menu_active_link', projectMainMenuActiveLink);
    addSelectorStyle('.to_projects_link', projectMainMenuActiveLink);
    addSelectorStyle('a', project_a);
    addSelectorStyle('a:hover', project_hover_a);
    addSelectorStyle('.project_name', alarmProjectName);
    addSelectorStyle('.timestamp', alarmTimeStamp);
    addSelectorStyle('table', alarmTable);
    addSelectorStyle('.main_menu *:nth-child(5)', mainMenuExit);
    addSelectorStyle('tr', alarmTr);
    addSelectorStyle('tr.even', project_tr_even);
    addSelectorStyle('tbody tr:nth-child(1)', project_tr_title);
    addSelectorStyle('#tableHolder',tableHolder);
    addSelectorStyle('.change_now', project_a);
    addSelectorStyle('button:hover', project_hover_a);
    addSelectorStyle('td', projectTd);
    addSelectorStyle('tr.checked', trChecked);
    addSelectorStyle('tr.checked.even', trChecked);
    addSelectorStyle('table', 'align-items: center;');


    addSelectorStyle('#comment_body', 'padding:0; border:0; height:25%; width:30%; box-sizing: border-box; background-color: transparent;');
    addSelectorStyle('.comment_body-wrapper', `display:flex; flex-direction: column; color: ${TEXT_COLOR};width: 100%; height:100%; padding:5%;box-sizing: border-box; background-color: ${TITLE_ROW_BACKGROUND_COLOR};border-radius: ${CARD_BORDER_RADIUS};box-shadow: 0rem 1rem 8rem rgba(0, 0, 0, 0.4);`);
    addSelectorStyle('.comment_body-wrapper  #comment_body_textarea', `width:100%;height:100%;resize:none;background-color: ${BODY_BACKGROUND_COLOR};color: ${TEXT_COLOR};border:0;`);
    addSelectorStyle('#comment_bodyheader', basePopupTitle);
    addSelectorStyle('#comment_bodyheader', `color: ${TEXT_COLOR}; padding:0;margin: 0 0 4% 0;`);
    addSelectorStyle('.comment_body-wrapper__text-area-wrapper', 'padding: 0; flex: 1 1 70%;display:flex;margin: 0 0 3% 0;');
    addSelectorStyle('.save_now', 'margin:0');
    addSelectorStyle('.cancel_now', 'margin:0');

    addSelectorStyle('.comment_body-wrapper__button-container', basePopupButtonContainer);
    addSelectorStyle('.comment_body-wrapper__button-container', 'flex: 1 1 20%;');
    addSelectorStyle('.comment_body-wrapper__button-container .save_now', basePopupButtonAdd);
    addSelectorStyle('.comment_body-wrapper__button-container .save_now:hover', basePopupButtonAddHover);
    addSelectorStyle('.comment_body-wrapper__button-container .cancel_now', basePopupButtonCancel);
    addSelectorStyle('.comment_body-wrapper__button-container .cancel_now:hover', basePopupButtonCancelHover);
    addSelectorStyle('.comment_body-wrapper__button-container button:hover', 'box-shadow: none;');

    addSelectorStyle('@media (max-width: 1980px)', '#comment_body {height:20%; width:30%;}');
    addSelectorStyle('@media (max-width: 1600px)', '#comment_body {height:15%; width:30%;}');
    addSelectorStyle('@media (max-width: 1600px)', 'tr td:nth-child(1),tr th:nth-child(1) { display: none; }');
    addSelectorStyle('@media (max-width: 1600px)', 'tr td:nth-child(4),tr th:nth-child(4) { display: none; }');
    addSelectorStyle('@media (max-width: 1600px)', 'tr td:nth-child(7),tr th:nth-child(7) { display: none; }');
    addSelectorStyle('@media (max-width: 1600px)', 'tr td:nth-child(10),tr th:nth-child(10) { display: none; }');


};
function monitorPage(){
    changeTitle('АСМ. Мониторинг');
    let brElements = document.body.querySelectorAll('br');
    if (brElements){brElements.forEach((br) => br.remove());};
    addSelectorStyle('tr td:nth-child(11)', monitoringStatusColumn);
    addSelectorStyle('tr td.fail_class', tdFailClass);
    addSelectorStyle('body', alarmBody);
    addSelectorStyle('.main_menu', alarmMainMenu);
    addSelectorStyle('.main_menu_nonactive_link', projectMainMenuNonActiveLink);
    addSelectorStyle('.main_menu_active_link', projectMainMenuActiveLink);
    addSelectorStyle('.to_projects_link', projectMainMenuActiveLink);
    addSelectorStyle('a', project_a);
    addSelectorStyle('a:hover', project_hover_a);
    addSelectorStyle('.project_name', alarmProjectName);
    addSelectorStyle('.timestamp', alarmTimeStamp);
    addSelectorStyle('table', alarmTable);
    addSelectorStyle('.main_menu *:nth-child(5)', mainMenuExit);
    addSelectorStyle('tr', alarmTr);
    addSelectorStyle('tr.even', project_tr_even);
    addSelectorStyle('tbody tr:nth-child(1)', project_tr_title);
    addSelectorStyle('#tableHolder',tableHolder);
    addSelectorStyle('.change_now', project_a);
    addSelectorStyle('button:hover', project_hover_a);
    addSelectorStyle('td', projectTd);
    addSelectorStyle('table', 'align-items: center;');
};

function archivePage(){
    let brElements = document.body.querySelectorAll('br');
    if (brElements){brElements.forEach((br) => br.remove());};
    let datePicker = document.body.children[2];
    datePicker.classList.add('date-picker');
    let searchContent = document.body.children[3];
    searchContent.classList.add('search-content');
    let selecters = document.createElement('div');
    selecters.append(datePicker);
    selecters.append(searchContent);
    selecters.classList.add('selecters');
    document.body.querySelector('.project_name').after(selecters);
    let pTitle = document.createElement('p');
    pTitle.textContent = 'Архив за период';
    pTitle.classList.add('date-picker__title')
    datePicker.prepend(pTitle);
    let pTitleSearch = document.createElement('p');
    pTitleSearch.textContent = 'Архив по адресу';
    pTitleSearch.classList.add('search-content__title')
    searchContent.prepend(pTitleSearch);
    let datePickerBody = document.createElement('div');
    datePickerBody.classList.add('date-picker__content');
    let fromPeriod = document.createElement('span');
    fromPeriod.textContent = 'с';
    let toPeriod = document.createElement('span');
    toPeriod.textContent = 'по';
    let fromBody= document.createElement('div');
    let toBody= document.createElement('div');
    fromBody.append(fromPeriod);
    fromBody.classList.add('date-picker__from-period');
    fromBody.append(document.body.querySelector('#date1'));
    toBody.append(toPeriod);
    toBody.append(document.body.querySelector('#date2'));
    toBody.classList.add('date-picker__to-period');
    datePickerBody.append(fromBody);
    datePickerBody.append(toBody);
    let datePickerText = document.createElement('p');
    datePickerText.classList.add('date-picker__text');
    datePickerText.textContent = 'Выберите период';
    datePicker.childNodes[1].remove();
    datePicker.childNodes[1].remove();
    pTitle.after(datePickerBody);
    pTitle.after(datePickerText);
    let searchText = document.createElement('p');
    searchText.textContent = 'Укажите ip или адрес устройства';
    searchText.classList.add('search-content__text');
    searchContent.childNodes[1].remove();
    pTitleSearch.after(searchText);
    let dataInfo = document.body.querySelector('#date_info');
    let dataInfoWrap = document.createElement('div');
    dataInfoWrap.classList.add('data-info-wrapper');
    dataInfoWrap.append(dataInfo);
    document.body.querySelector('.find_now').after(dataInfoWrap);
    let searchInfo = document.body.querySelector('#search_word_info');
    let searchInfoWrap = document.createElement('div');
    searchInfoWrap.classList.add('search-info-wrapper');
    searchInfoWrap.append(searchInfo);
    document.body.querySelector('.find_now_search_word').after(searchInfoWrap);



    changeTitle('АСМ. Архив');
    addSelectorStyle('body', alarmBody);
    addSelectorStyle('.main_menu', alarmMainMenu);
    addSelectorStyle('.main_menu_nonactive_link', projectMainMenuNonActiveLink);
    addSelectorStyle('.main_menu_active_link', projectMainMenuActiveLink);
    addSelectorStyle('.to_projects_link', projectMainMenuActiveLink);
    addSelectorStyle('a', project_a);
    addSelectorStyle('a:hover', project_hover_a);
    addSelectorStyle('.project_name', alarmProjectName);
    addSelectorStyle('.main_menu *:nth-child(5)', mainMenuExit);
    addSelectorStyle('table:not(.ui-datepicker-calendar)', alarmTable);
    addSelectorStyle('tr:not(.ui-datepicker-calendar)', alarmTr);
    addSelectorStyle('tr.even:not(.ui-datepicker-calendar)', project_tr_even);
    addSelectorStyle('tbody tr:nth-child(1)', project_tr_title);
    addSelectorStyle('#tableHolder',tableHolder);
    addSelectorStyle('.search-content',archiveForm);
    addSelectorStyle('.date-picker',archiveForm);
    addSelectorStyle('button:not(#switch)', archiveButton);
    addSelectorStyle('button:not(#switch):hover', projectCreateNewProjectButtonHover);
    addSelectorStyle('.selecters', archiveSelecters);
    addSelectorStyle('p', archiveP);
    addSelectorStyle('.search-content__title, .date-picker__title', archiveTitle);
    addSelectorStyle('.search-content__text, .date-picker__text', archiveText);
    addSelectorStyle('.date-picker__content', 'display: flex; gap: 2%;');
    addSelectorStyle('.date-picker__content input', archiveSpanInput);
    addSelectorStyle('.search-content input', archiveSpanInputOther);
    addSelectorStyle('.date-picker__content span', archiveSpan);
    addSelectorStyle('.date-picker__content span:nth-child(1)', 'padding: 0 1% 0 0;');
    addSelectorStyle('tr :nth-child(2)', 'display:none;');
    addSelectorStyle('tr :nth-child(5)', 'display:none;');
    addSelectorStyle('tr :nth-child(6)', 'display:none;');
    addSelectorStyle('table', 'align-items: center;margin: 2% 0 0 0;');
    addSelectorStyle('td', archiveTd);
    addSelectorStyle('.date-picker__from-period, .date-picker__to-period', 'display:flex; gap: 1%; flex: 1 1 50%;');
    addSelectorStyle('.date-picker__from-period span, .date-picker__to-period span', 'flex: 1 1 8%;');
    addSelectorStyle('.date-picker__from-period input, .date-picker__to-period input', 'flex: 1 1 90%;');
    addSelectorStyle('.data-info-wrapper', 'position: relative;');
    addSelectorStyle('#date_info', 'position: absolute;top:0;left:0;');
    addSelectorStyle('.search-info-wrapper', 'position: relative;');
    addSelectorStyle('#search_word_info', 'position: absolute;top:0;left:0;');
    addSelectorStyle('@media (max-width: 1680px)', '.date-picker__content { flex-direction:column;gap:20%} button.find_now_search_word:not(#switch) {margin: auto 0 0 0; }');

};

function basePage(){
    let textArea = document.body.querySelector('#equipmentAdder_textarea');
    let buttonSave = document.body.querySelector('.add_now_save');
    let buttoCancel = document.body.querySelector('.add_now_cancel');
    let equipmentAdderInfo = document.body.querySelector('#equipmentAdder_info');
    let oldClass = document.body.querySelector('#equipmentAdder');
    let newClass = document.createElement('div');
    let myClass = document.createElement('div');
    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('popup-buttons');
    buttonContainer.append(buttonSave);
    buttonContainer.append(buttoCancel);
    let newDescription = document.createElement('p');
    let newTitle= document.createElement('p');
    newTitle.textContent = 'Добавление устройств в базу.';
    newTitle.classList.add('popup-title');
    newDescription.innerHTML =
        'Для добавления в базу укажите данные оборудования через «|» по указанной форме:<br>'+
        '<span>[ИДЕНТИФИКАТОР] | [АДРЕС] | [РАЙОН] | IP | [IP КОММУТАТОРА] | [SLA] | [СЕТЬ ВКЛЮЧЕНИЯ] | [ЗОНА ОБСЛУЖИВАНИЯ]</span>'+
        '<ul>Правила:'+
        '<li>IP указывать обязательно. Остальные данные, если отствуют, заполняться дефолтными значениями.</li>'+
        '<li>Вставлять можно до 100 строчек одновременно.</li>'+
        '<li>Если IP уже существует в базе, то данные будут изменены.</li>'+
        '<li>Пустых строк быть не должно.</li>'+
        '</ul>'+
        'Пример:<br>'+
        '<span>ARH-1327|Розы Люксембург д.37|г.Санкт-Петербург|10.180.44.123|10.225.23.15|4 часа|Interzet|Участок 7|</span>';
    newDescription.classList.add('popup-text');
    newClass.classList.add('equipmentAdder');
    newClass.id = 'equipmentAdder';
    myClass.classList.add('equipmentAdderMy');
    myClass.id = 'equipmentAdderMy';
    myClass.append(newTitle);
    myClass.append(newDescription);
    myClass.append(textArea);
    myClass.append(textArea);
    myClass.append(buttonContainer);
    newClass.append(myClass);
    oldClass.before(newClass);
    oldClass.remove();
    let searchLineObj = document.body.querySelector('.search_line');
    searchLineObj.childNodes[1].remove();
    let searchTitleObj = document.createElement('p');
    searchTitleObj.textContent = 'Поиск по базе данных.';
    searchTitleObj.classList.add('base-title');
    searchLineObj.prepend(searchTitleObj);
    let appendTitleObj = document.createElement('p');
    appendTitleObj.classList.add('base-title');
    appendTitleObj.textContent = 'Добавление данных в базу.';
    searchLineObj.append(appendTitleObj);
    let buttonAddDB = document.body.querySelector('#add_now_toggle');
    searchLineObj.append(buttonAddDB);
    changeTitle('АСМ. База');
    addSelectorStyle('body', alarmBody);
    addSelectorStyle('.main_menu', alarmMainMenu);
    addSelectorStyle('.main_menu_nonactive_link', projectMainMenuNonActiveLink);
    addSelectorStyle('.main_menu_active_link', projectMainMenuActiveLink);
    addSelectorStyle('.to_projects_link', projectMainMenuActiveLink);
    addSelectorStyle('a', project_a);
    addSelectorStyle('a:hover', project_hover_a);
    addSelectorStyle('.project_name', alarmProjectName);
    addSelectorStyle('.main_menu *:nth-child(5)', mainMenuExit);
    addSelectorStyle('form', archiveForm);
    addSelectorStyle('form', 'align-self: center;');
    addSelectorStyle('.search_line', archiveForm);
    addSelectorStyle('.search_line', 'margin:0;padding:0;');
    addSelectorStyle('#search_word', archiveSpanInput);
    addSelectorStyle('#search_word', 'margin: 0 0 1% 0;');
    addSelectorStyle('#search_word_submit:hover', projectCreateNewProjectButtonHover);
    addSelectorStyle('#search_word_submit', basePopupButtonAdd);
    addSelectorStyle('#search_word_submit', 'margin: 0 0 1% 0;');
    addSelectorStyle('#equipmentAdderMy span', baseSpan);
    addSelectorStyle('#equipmentAdderMy ul', baseLi);
    addSelectorStyle('#equipmentAdderMy', basePopup);
    addSelectorStyle('#equipmentAdder', basePopupWrapp);
    addSelectorStyle('.popup-title', basePopupTitle);
    addSelectorStyle('.popup-text', basePopupText);
    addSelectorStyle('#equipmentAdder_textarea', basePopupTextArea);
    addSelectorStyle('.popup-buttons', basePopupButtonContainer);
    addSelectorStyle('.popup-buttons .add_now_save', basePopupButtonAdd);
    addSelectorStyle('.popup-buttons .add_now_save:hover', basePopupButtonAddHover);
    addSelectorStyle('.popup-buttons .add_now_cancel', basePopupButtonCancel);
    addSelectorStyle('.popup-buttons .add_now_cancel:hover', basePopupButtonCancelHover);
    addSelectorStyle('#add_now_toggle:hover', projectCreateNewProjectButtonHover);
    addSelectorStyle('#add_now_toggle', basePopupButtonAdd);
    addSelectorStyle('.base-title', basePopupTitle);
    addSelectorStyle('table', alarmTable);
    addSelectorStyle('table', 'align-items: center;margin: 2% 0 0 0;');
    addSelectorStyle('tr', alarmTr);
    addSelectorStyle('tr.even', project_tr_even);
    addSelectorStyle('tbody tr', project_tr_title);
    addSelectorStyle('#tableHolder',tableHolder);
    addSelectorStyle('#tableHolder p','text-align: center;color: ${RED_COLOR};');
    addSelectorStyle('#search_word_submit','margin: 3% 0 5% 0;');
};

(function() {
    'use strict';
    headConf();
    addSelectorStyle('.theme-light',whiteTheme);
    addSelectorStyle('.theme-dark',darkTheme);
    addSelectorStyle('.theme-switcher','display:flex; justify-content: flex-end; align-items:center;padding: 1% 1%; align-self: flex-end;position: relative;')
    addSelectorStyle('#switch span','opacity:0;transition: all 0.4s ease;')
    addSelectorStyle('#switch span.active','opacity:100%; position: absolute; top:50%%; left:50%;transform: translate(-50%);')
    addSelectorStyle('#switch','background-color: var(--switcher-bg-color);transition: all 0.4s ease;border:0;cursor: pointer;')
    addSelectorStyle('#switch:hover','box-shadow: none;transform: scale(1.1);')

    if (currentLink === ALARM_LINK || currentLink === ALARM_LINK_VAR){
        if (document.querySelector('.login_block')){
            appendThemeSwicher();
            loginPage();
            return;
        };
        appendThemeSwicher();
        alarmPage();
    }else if (currentLink === MONITORING_LINK){
        appendThemeSwicher();
        monitorPage();
    }else if (currentLink === PROJECTS_LINK){
        appendThemeSwicher();
        projectsPage();
    }else if (currentLink === ARCHIVE_LINK){
        archivePage();
        appendThemeSwicher();
    }else if (currentLink === BASE_LINK){
        appendThemeSwicher();
        basePage();
    };

})();