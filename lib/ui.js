export class UI {


    /** 
    * @param {Object=} preferences - Your preferred settings for UI.js.
    */

    constructor(/*preferences="{}"*/) {

        // this.preferences = preferences;

    };

    /* Functions For Pre-built Units (ex. Nav, Buttons, etc) */


    /**
     * @param {int} linkNumber - number of links which determines how many <li> elements will be made
     * @param {string} parentEl - The parent element that the new Unit will be appended to
    */
    
    Nav (linkNumber, parentEl) {

        const body = parentEl;

        const nav = document.createElement('nav');
        nav.classList += 'navigation-bar';

        body.appendChild(nav);

        const ul = document.createElement('ul');
        ul.classList += 'link-list';

        nav.appendChild(ul);

        var li;

        var a;

        /* For loop to create multiple links for the amount of links the user has provided */

        for(var i = 0; i < linkNumber; i++) {

            li = document.createElement("li");
            li.classList += 'link-li';

            ul.appendChild(li);

            a = document.createElement('a');
            a.classList += 'link';

            li.appendChild(a);

            li.style.fontFamily = 'sans-serif';
            li.style.marginRight = '25px';
            li.style.color = 'black';

            a.style.textDecoration = 'none';
            a.style.color = 'black';

        }

        nav.style.height = '100px';
        nav.style.width = '100%';

        ul.style.height = '100%';
        ul.style.width = '100%';
        ul.style.listStyle = 'none';
        ul.style.display = 'flex';
        ul.style.alignItems = 'center';
        ul.style.justifyContent = 'center';
        ul.style.color = 'black';

    }

    /**
     * @param {string} buttonText - Text displayed on the button.
     * @param {string} parentEl - The parent element that the new Unit will be appended to
     */


    Button (buttonText, parentEl) {

        const body = parentEl;

        const button = document.createElement('button');
        button.classList += 'button';

        button.innerText = buttonText;

        body.appendChild(button);

        button.style.backgroundColor = 'black';
        button.style.color = 'white';
        button.style.padding = '10px 30px 10px';
        button.style.border = 'none';
        button.style.borderRadius = '5px';

    }

    /**
     * @param {Array[]} menuOptions - Options the user can select from the dropdown. Please use a placeholder for the dropdown as the first item in the array.
     * @param {string} parentEl - The parent element that the new Unit will be appended to
     */

    Menu (menuOptions, parentEl) {

        const body = parentEl;
        
        const dropdownMenu = document.createElement('select');
        dropdownMenu.classList += 'dropdownMenu';
        
        body.appendChild(dropdownMenu);

        /* For loop to create multiple menu options for the amount of options the user has provided */
        
        for(var i = 0; i < menuOptions.length; i++){

            
            const menuOption = document.createElement('option');
            menuOption.classList += 'option';

            /* Logic to check which menu option is the placeholder text */

            if (i == 0) {
                menuOption.disabled = "true"
                menuOption.selected = "true"
            }
                
            menuOption.value = menuOptions[i];
            menuOption.innerText = menuOptions[i];

            dropdownMenu.appendChild(menuOption);

            console.log('dropdown menu has been created!');
            
        };
        
    }

    /**
     * @param {string} parentEl - The parent element that the new Unit will be appended to
     */

    Signup (parentEl) {
        
        const body = parentEl;
        
        const form = document.createElement('form');
        form.classList += 'signupForm';
        
        body.appendChild(form);

        const formTitle = document.createElement('h1');
        formTitle.innerText = 'Signup';

        form.appendChild(formTitle);

        var inputTypes = ["Username", "Email", "Password"];

        /* For loop to create multiple inputs for all the fields listed in the array above */

        for (var i = 0; i < 3; i++) {

            const input = document.createElement('input');

            input.placeholder = inputTypes[i];
            input.classList += inputTypes[i];

            form.appendChild(input);

            input.style.backgroundColor = '#f2f2f2';
            input.style.color = 'black';
            input.style.padding = '10px 50px 10px';
            input.style.border = 'none';
            input.style.borderRadius = '5px';
            input.style.marginBottom = '15px';
            input.style.fontFamily = 'sans-serif';
            
        }

        const signupBtn = document.createElement('button');
        signupBtn.innerText = 'Signup';
        form.appendChild(signupBtn);

        form.style.display = 'flex';
        form.style.flexDirection = 'column';
        form.style.justifyContent = 'center';
        form.style.backgroundColor = 'white';
        form.style.color = 'black';
        form.style.height = '75%';
        form.style.width = '30%';
        form.style.padding = '50px 50px 50px';
        form.style.border = 'none';
        form.style.borderRadius = '15px';
        form.style.boxShadow = '25px 25px 25px rgba(0, 0, 0, 0.1)';

        formTitle.style.fontFamily = 'sans-serif';
        formTitle.style.fontSize = '30px';
        formTitle.style.display = 'block';
        formTitle.style.margin = 'auto';
        formTitle.style.marginBottom = '50px';

        signupBtn.style.backgroundColor = 'black';
        signupBtn.style.color = 'white';
        signupBtn.style.padding = '10px 30px 10px';
        signupBtn.style.border = 'none';
        signupBtn.style.borderRadius = '5px';
        signupBtn.style.cursor = 'pointer';

    }

    /**
     * @param {string} parentEl - The parent element that the new Unit will be appended to
     */

    Login (parentEl) {
        
        const body = parentEl;
        
        const form = document.createElement('form');
        form.classList += 'loginForm';
        
        body.appendChild(form);

        const formTitle = document.createElement('h1');
        formTitle.innerText = 'Login';

        form.appendChild(formTitle);

        var inputTypes = ["Username", "Email", "Password"];

        /* For loop to create multiple inputs for all the fields listed in the array above */

        for (var i = 0; i < 3; i++) {

            const input = document.createElement('input');

            input.placeholder = inputTypes[i];
            input.classList += inputTypes[i];

            form.appendChild(input);

            input.style.backgroundColor = '#f2f2f2';
            input.style.color = 'black';
            input.style.padding = '10px 50px 10px';
            input.style.border = 'none';
            input.style.borderRadius = '5px';
            input.style.marginBottom = '15px';
            input.style.fontFamily = 'sans-serif';
            
        }

        const loginBtn = document.createElement('button');
        loginBtn.innerText = 'Signup';
        form.appendChild(loginBtn);

        form.style.display = 'flex';
        form.style.flexDirection = 'column';
        form.style.justifyContent = 'center';
        form.style.backgroundColor = 'white';
        form.style.color = 'black';
        form.style.height = '75%';
        form.style.width = '30%';
        form.style.padding = '50px 50px 50px';
        form.style.border = 'none';
        form.style.borderRadius = '15px';
        form.style.boxShadow = '25px 25px 25px rgba(0, 0, 0, 0.1)';

        formTitle.style.fontFamily = 'sans-serif';
        formTitle.style.fontSize = '30px';
        formTitle.style.display = 'block';
        formTitle.style.margin = 'auto';
        formTitle.style.marginBottom = '50px';

        loginBtn.style.backgroundColor = 'black';
        loginBtn.style.color = 'white';
        loginBtn.style.padding = '10px 30px 10px';
        loginBtn.style.border = 'none';
        loginBtn.style.borderRadius = '5px';
        loginBtn.style.cursor = 'pointer';

    }

    /**
     * @param {string} parentEl - The parent element that the new Unit will be appended to
     */

    Checkbox(parentEl) {

        const body = parentEl;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList += 'checkbox';

        body.appendChild(checkbox);

    }

    /**
     * @param {string} parentEl - The parent element that the new Unit will be appended to
     */

    DateSelector(parentEl) {

        const body = parentEl;

        const dateContainer = document.createElement('div');
        dateContainer.classList += 'dateContainer';

        dateContainer.style.display = 'flex';
        dateContainer.style.flexDirection = 'column';
        dateContainer.style.height = 'auto';
        dateContainer.style.width = '100px';

        body.appendChild(dateContainer);

        const label = document.createElement('label');
        label.innerText = 'Pick A Date';
        label.setAttribute('for', 'date');

        label.style.fontFamily = 'sans-serif';
        label.style.marginBottom = '2.5px';

        dateContainer.appendChild(label);

        const picker = document.createElement('input');
        picker.type = 'date';
        picker.classList += 'datePicker';

        dateContainer.appendChild(picker);

    }

    /**
     * @param {string} errorAlertText - Text that will be displayed in error alert.
     * @param {string} parentEl - The parent element that the new Unit will be appended to
     */

    ErrorAlert(errorAlertText, parentEl) {

        const body = parentEl;

        const alertContainer = document.createElement('div');
        alertContainer.classList += 'alertContainer';

        body.appendChild(alertContainer);

        const alertText = document.createElement('p');
        alertText.innerText = errorAlertText;
        alertText.classList += 'errorAlertText';

        alertContainer.style.display = 'flex';
        alertContainer.style.backgroundColor = '#fa8e8e';
        alertContainer.style.color = '#b50000';
        alertContainer.style.height = '25px';
        alertContainer.style.width = 'fit-content';
        alertContainer.style.padding = '5px 25px 5px';
        alertContainer.style.margin = '10px 10px 10px';
        alertContainer.style.border = 'none';
        alertContainer.style.borderRadius = '5px';
        alertContainer.style.alignItems = 'center';
        alertContainer.style.justifyContent = 'center';
        alertContainer.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.05)';

        alertText.style.fontFamily = 'sans-serif';
        alertText.style.fontSize = '14px';

        alertContainer.appendChild(alertText);

    }

    /**
     * @param {string} warningAlertText - Text that will be displayed in error alert.
     * @param {string} parentEl - The parent element that the new Unit will be appended to
     */

    WarningAlert(warningAlertText, parentEl) {

        const body = parentEl;

        const alertContainer = document.createElement('div');
        alertContainer.classList += 'alertContainer';

        body.appendChild(alertContainer);

        const alertText = document.createElement('p');
        alertText.innerText = warningAlertText;
        alertText.classList += 'warningAlertText';

        alertContainer.style.display = 'flex';
        alertContainer.style.backgroundColor = '#fad48e';
        alertContainer.style.color = '#cc8400';
        alertContainer.style.height = '25px';
        alertContainer.style.width = 'fit-content';
        alertContainer.style.padding = '5px 25px 5px';
        alertContainer.style.margin = '10px 10px 10px';
        alertContainer.style.border = 'none';
        alertContainer.style.borderRadius = '5px';
        alertContainer.style.alignItems = 'center';
        alertContainer.style.justifyContent = 'center';
        alertContainer.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.05)';

        alertText.style.fontFamily = 'sans-serif';
        alertText.style.fontSize = '14px';

        alertContainer.appendChild(alertText);

    }

    /**
     * @param {string} infoAlertText - Text that will be displayed in error alert.
     * @param {string} parentEl - The parent element that the new Unit will be appended to
     */

    InfoAlert(infoAlertText, parentEl) {

        const body = parentEl;

        const alertContainer = document.createElement('div');
        alertContainer.classList += 'alertContainer';

        body.appendChild(alertContainer);

        const alertText = document.createElement('p');
        alertText.innerText = infoAlertText;
        alertText.classList += 'infoAlertText';

        alertContainer.style.display = 'flex';
        alertContainer.style.backgroundColor = '#91e0ff';
        alertContainer.style.color = '#007bab';
        alertContainer.style.height = '25px';
        alertContainer.style.width = 'fit-content';
        alertContainer.style.padding = '5px 25px 5px';
        alertContainer.style.margin = '10px 10px 10px';
        alertContainer.style.border = 'none';
        alertContainer.style.borderRadius = '5px';
        alertContainer.style.alignItems = 'center';
        alertContainer.style.justifyContent = 'center';
        alertContainer.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.05)';

        alertText.style.fontFamily = 'sans-serif';
        alertText.style.fontSize = '14px';

        alertContainer.appendChild(alertText);

    }

    /**
     * @param {string} successAlertText - Text that will be displayed in error alert.
     * @param {string} parentEl - The parent element that the new Unit will be appended to
     */

    SuccessAlert(successAlertText, parentEl) {

        const body = parentEl;

        const alertContainer = document.createElement('div');
        alertContainer.classList += 'alertContainer';

        body.appendChild(alertContainer);

        const alertText = document.createElement('p');
        alertText.innerText = successAlertText;
        alertText.classList += 'successAlertText';

        alertContainer.style.display = 'flex';
        alertContainer.style.backgroundColor = '#80ff9f';
        alertContainer.style.color = '#009c26';
        alertContainer.style.height = '25px';
        alertContainer.style.width = 'fit-content';
        alertContainer.style.padding = '5px 25px 5px';
        alertContainer.style.margin = '10px 10px 10px';
        alertContainer.style.border = 'none';
        alertContainer.style.borderRadius = '5px';
        alertContainer.style.alignItems = 'center';
        alertContainer.style.justifyContent = 'center';
        alertContainer.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.05)';

        alertText.style.fontFamily = 'sans-serif';
        alertText.style.fontSize = '14px';

        alertContainer.appendChild(alertText);

    }

    /**
     * @param {string} parentEl - The parent element that the new Unit will be appended to
     */

    Searchbar(parentEl) {

        const body = parentEl;

        const searchContainer = document.createElement('div');
        searchContainer.classList += 'searchContainer';
    
        searchContainer.style.display = 'flex';
        searchContainer.style.alignItems = 'center';
        searchContainer.style.boxShadow = '10px 10px 10px rgba(0, 0, 0, 0.1)';
        searchContainer.style.width = 'fit-content';
        searchContainer.style.borderRadius = '5px';

        body.appendChild(searchContainer);

        const searchIcon = document.createElement('img');
        searchIcon.classList += 'searchIcon';
        searchIcon.src = './lib/icons/loupe.png';

        searchIcon.style.height = '18px';
        searchIcon.style.width = '18px';
        searchIcon.style.padding = '17px 17px 17px';
        searchIcon.style.backgroundColor = 'white';

        searchContainer.appendChild(searchIcon);

        const searchbar = document.createElement('input');
        searchbar.classList += 'searchbar';
        searchbar.type = 'search';
        searchbar.placeholder = 'Search';

        searchbar.style.background = '#f2f2f2';
        searchbar.style.color = 'black';
        searchbar.style.fontFamily = 'sans-serif';
        searchbar.style.padding = '10px 35px 10px';
        searchbar.style.border = 'none';
        searchbar.style.borderTopRightRadius = '5px';
        searchbar.style.borderBottomRightRadius = '5px';
        searchbar.style.borderBottomLeftRadius = '5px';
        searchbar.style.borderTopLeftRadius = '5px';
        searchbar.style.cursor = 'text';
        searchbar.style.marginRight = '5px';

        searchContainer.appendChild(searchbar);

    }

    /**
     * @param {string} messageTitleText - Text that will be displayed for message title.
     * @param {string} messageBodyText - Text that will be displayed for message body.
     * @param {string} parentEl - The parent element that the new Unit will be appended to
     */

    MessageBox(messageTitleText, messageBodyText, parentEl) {

        const body = parentEl;

        const messageContainer = document.createElement('div');
        messageContainer.classList += 'messageContainer';

        messageContainer.style.height = 'fit-content';
        messageContainer.style.width = 'fit-content';
        messageContainer.style.background = 'white';
        messageContainer.style.padding = '25px 25px 25px';
        messageContainer.style.border = 'none';
        messageContainer.style.borderRadius = '15px';
        messageContainer.style.boxShadow = '25px 25px 25px rgba(0, 0, 0, 0.1)';

        const messageTitle = document.createElement('h1');
        messageTitle.classList += 'messageTitle';
        messageTitle.innerText = messageTitleText;

        messageTitle.style.fontFamily = 'sans-serif';

        const messageBody = document.createElement('p');
        messageBody.classList += 'messageBody';
        messageBody.innerText = messageBodyText;

        messageBody.style.fontFamily = 'sans-serif';

        const dismissBtn = document.createElement('button');
        dismissBtn.classList += 'dismissBtn';
        dismissBtn.innerText = 'Dismiss';

        dismissBtn.style.backgroundColor = '#f2f2f2';
        dismissBtn.style.color = 'black';
        dismissBtn.style.padding = '10px 30px 10px';
        dismissBtn.style.border = 'none';
        dismissBtn.style.borderRadius = '5px';
        dismissBtn.style.marginRight = '10px';
        dismissBtn.style.cursor = 'pointer';

        const learnMoreBtn = document.createElement('button');
        learnMoreBtn.classList += 'learnMoreBtn';
        learnMoreBtn.innerText = 'Learn More';

        learnMoreBtn.style.backgroundColor = 'black';
        learnMoreBtn.style.color = 'white';
        learnMoreBtn.style.padding = '10px 30px 10px';
        learnMoreBtn.style.border = 'none';
        learnMoreBtn.style.borderRadius = '5px';
        learnMoreBtn.style.cursor = 'pointer';

        body.appendChild(messageContainer);

        messageContainer.appendChild(messageTitle);
        messageContainer.appendChild(messageBody);
        messageContainer.appendChild(dismissBtn);
        messageContainer.appendChild(learnMoreBtn);

    }

    /**
     * @param {string} cardTitle - Text displayed for card title.
     * @param {string} cardText - Text displayed for card body.
     * @param {string} cardButtonText - Text displayed for card button.
     * @param {string} parentEl - The parent element that the new Unit will be appended to
     */


    Card(cardTitle, cardText, cardButtonText, parentEl) {

        const body = parentEl;

        const card = document.createElement('div');
        card.classList += 'card';

        card.style.height = 'fit-content';
        card.style.width = '200px';
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.style.justifyContent = 'center';
        card.style.backgroundColor = 'white';
        card.style.color = 'black';
        card.style.padding = '25px 25px 25px';
        card.style.border = 'none';
        card.style.borderRadius = '10px';
        card.style.boxShadow = '25px 25px 25px rgba(0, 0, 0, 0.1)';

        const cardTitleEl = document.createElement('h1');
        cardTitleEl.classList += 'cardTitle';
        cardTitleEl.innerText = cardTitle;

        cardTitleEl.style.fontFamily = 'sans-serif';

        card.appendChild(cardTitleEl);

        const cardTextEl = document.createElement('p');
        cardTextEl.classList += 'cardText';
        cardTextEl.innerText = cardText;

        cardTextEl.style.fontFamily = 'sans-serif';

        card.appendChild(cardTextEl);

        const cardButton = document.createElement('button');
        cardButton.classList += 'cardButton';
        cardButton.innerText = cardButtonText;

        cardButton.style.backgroundColor = 'black';
        cardButton.style.color = 'white';
        cardButton.style.padding = '10px 30px 10px';
        cardButton.style.border = 'none';
        cardButton.style.borderRadius = '5px';
        cardButton.style.cursor = 'pointer';

        card.appendChild(cardButton);

        body.appendChild(card);

    }

    /**
     * @param {string} feedContent - Content that will be displayed inside of the Feed() element.
     * @param {string} parentEl - The parent element that the new Unit will be appended to
     */

    Feed(feedContent = 'This Is A Feed; Customize The Content Inside! This Is A Scrollable Container!', parentEl) {

        const body = parentEl;

        const feed = document.createElement('div');
        feed.classList += 'feed';

        feed.innerText = feedContent;

        feed.style.margin = '4px 4px';
        feed.style.padding = '4px';
        feed.style.backgroundColor = '#f2f2f2';
        feed.style.width = '500px';
        feed.style.height = '750px';
        feed.style.overflowX = 'hidden';
        feed.style.overflowY = 'auto';
        feed.style.textAlign = 'justify';
        feed.style.borderRadius = '15px';
        feed.style.fontFamily = 'sans-serif';

        body.appendChild(feed);

    }

    /**
     * @param {int} notificationCount - Number that will be displayed for the number of notifications.
     * @param {string} parentEl - The parent element that the new Unit will be appended to
     */

    Notification(notificationCount, parentEl) {

        const body = parentEl;

        const notification = document.createElement('div');
        notification.classList += 'notification';

        const notificationCounter = document.createElement('p');
        notificationCounter.classList += 'notificationCounter';

        notificationCounter.innerText = notificationCount;
        notificationCounter.style.fontSize = '12px';

        notification.appendChild(notificationCounter);

        notificationCounter.style.fontFamily = 'sans-serif';
        notificationCounter.style.color = 'white';

        notification.style.backgroundColor = 'red';
        notification.style.padding = '2.5px 2.5px 2.5px';
        notification.style.borderRadius = '50%';
        notification.style.height = 'fit-content';
        notification.style.width = '37.5px';
        notification.style.display = 'grid';
        notification.style.placeItems = 'center';


        body.appendChild(notification);

    }

    /**
     * @param {boolean} homeIcon - include home icon
     * @param {boolean} mainPageIcon - include mainPage icon 
     * @param {boolean} accountIcon - include account Icon
     * @param {boolean} settingsIcon - include settings Icon
     * @param {string} parentEl - The parent element that the new Unit will be appended to
     */


    MobileNav(homeIcon, mainPageIcon, accountIcon, settingsIcon ,parentEl) {

        const body = parentEl;

        const nav = document.createElement('nav');
        nav.classList += 'mobileNav';

        nav.style.display = 'flex';
        nav.style.justifyContent = 'center';
        nav.style.alignItems = 'center';
        nav.style.height = 'fit-content';
        nav.style.width = '100%';
        nav.style.backgroundColor = '#f2f2f2';
        nav.style.padding = '15px 0px 15px';

        const home = document.createElement('img');
        const mainPage = document.createElement('img');
        const account = document.createElement('img');
        const settings = document.createElement('img');

        /* Logic to see which icons should be shown based on what the user has passed through the function */

        if (homeIcon == true) {
            home.src = './lib/icons/home-2.png';
            home.style.height = '24px';
            home.style.width = '24px';
            home.style.marginRight = '15px';
        } 

        if (mainPageIcon == true) {
            mainPage.src = './lib/icons/main-menu.png';
            mainPage.style.height = '24x';
            mainPage.style.width = '24px';
            mainPage.style.marginRight = '15px';
        } 

        if (accountIcon == true) {
            account.src = './lib/icons/user.png';
            account.style.height = '24px';
            account.style.width = '24px';
            account.style.marginRight = '15px';
        } 
        
        if (settingsIcon == true) {
            settings.src = './lib/icons/settings.png';
            settings.style.height = '24px';
            settings.style.width = '24px';
        }
        

        nav.appendChild(home);
        nav.appendChild(mainPage);
        nav.appendChild(account);
        nav.appendChild(settings);

        body.appendChild(nav);

    }

    /**
     * @param {string} tip - Text that will be displayed in tooltip.
     * @param {string} parentEl - The parent element that the new Unit will be appended to
     */

    Tooltip(tip ,parentEl) {

        const body = parentEl;

        const tooltip = document.createElement('div');
        tooltip.classList += 'tooltip';

        tooltip.style.display = 'flex';
        tooltip.style.alignItems = 'center';
        tooltip.style.justifyContent = 'center';
        tooltip.style.backgroundColor = '#92DBFF';
        tooltip.style.height = 'fit-content';
        tooltip.style.width = 'fit-content';
        tooltip.style.padding = '0px 15px 0px';
        tooltip.style.borderRadius = '25px';
    
        const tooltipText = document.createElement('p');
        tooltipText.innerText = tip;

        tooltipText.style.fontFamily = 'sans-serif';
        tooltipText.style.marginLeft = '5px';
        tooltipText.style.textAlign = 'center';
        tooltipText.style.fontSize = '12px';

        tooltip.style.color = '#0092D9';

        const tipIcon = document.createElement('img');
        tipIcon.src = './lib/icons/info.png';

        tipIcon.style.height = '16px';
        tipIcon.style.width = '16px';

        tooltip.appendChild(tipIcon);
        tooltip.appendChild(tooltipText);

        body.appendChild(tooltip);

    }

};

export class Unit {

    /**
     * @param {string} elementName - Code to display on page
     * @param {string} attrs - HTML Attributes to detail the element
     * @param {string=} elementContent - Content In The Element...
     * @param {DocumentElement=} parent - Parent element to append to. | Defaults to <body>
     */

    constructor(elementName = "div", attrs = "", elementContent = "", parent = document.body) {

        this.name = elementName;
        this.attrs = attrs;
        this.content = elementContent;
        this.parent = parent;

    }

    /**
     * @param {DocumentElement=} newParent - Optional new parent for updated element view.
     * @param {updatedCSSRules=} updatedCSSRules
     */
    Render () {
        
        var elString = `<${this.name} ${this.attrs}>${this.content}</${this.name}>`

        let getNodes = str => new DOMParser().parseFromString(str, 'text/html').body.childNodes;

        let nodes = getNodes(elString)

        for (var i = 0; i < nodes.length; i++) {
            this.parent.appendChild(nodes[i])
        }
        
    }

}

/* Simple class to help users structure their Units on a page with a few lines of JS */

export class Viewer {

    constructor(unit) {

        this.unit = unit;

    }

    /**
     * @param {string} element1
     * @param {string} element2
     * @param {string} element3
     * @param {string} element4
     * @param {string} parentElement
     */

    TwoByTwo(element1, element2, element3, element4, parentElement) {

        const body = parentElement;

        body.style.display = 'flex';
        body.style.flexDirection = 'column';

        const top = document.createElement('div');
        const bottom = document.createElement('div');

        top.style.display = 'flex';
        bottom.style.display = 'flex';

        top.appendChild(element1);
        top.appendChild(element2);
    
        bottom.appendChild(element3);
        bottom.appendChild(element4);

        body.appendChild(top);
        body.appendChild(bottom);

    }

    /**
     * @param {string} element1
     * @param {string} element2
     * @param {string} element3
     * @param {string} element4
     * @param {string} element5
     * @param {string} element6
     * @param {string} element7
     * @param {string} element8
     * @param {string} element9
     * @param {string} parentElement
     */

    ThreeByThree(element1, element2, element3, element4, element5, element6, element7, element8, element9, parentElement) {

        const body = parentElement;

        body.style.display = 'flex';
        body.style.flexDirection = 'column';

        const top = document.createElement('div');
        const middle = document.createElement('div');
        const bottom = document.createElement('div');

        top.style.display = 'flex';
        middle.style.display = 'flex';
        bottom.style.display = 'flex';

        top.appendChild(element1);
        top.appendChild(element2);
        top.appendChild(element3);

        middle.appendChild(element4);
        middle.appendChild(element5);
        middle.appendChild(element6);
    
        bottom.appendChild(element7);
        bottom.appendChild(element8);
        bottom.appendChild(element9)

        body.appendChild(top);
        body.appendChild(middle)
        body.appendChild(bottom);

    }

    /**
     * @param {string} element1
     * @param {string} element2
     * @param {string} parentElement
     */

    Flex2(element1, element2, parentElement) {

        const body = parentElement;

        const container = document.createElement('div');
        container.style.display = 'flex';

        container.appendChild(element1);
        container.appendChild(element2);

        body.appendChild(container);

    }

}

/* Simple class to help users add all data on frontend for a POST request straight from their main JS file */

export class DataPasser {

    constructor() {

    }

    /**
     * @param {string} element - Element that data will be added to
     * @param {string} location - The location of the users' server to add as a route
     */

    Post(element, location) {

        console.log('Setting up POST request on frontend');

        /* Defining base variables from passed in data */

        const elementToAddData = element;
        const parentElement = parent;
        const dataLocation = location;

        /* Adding in attributes to setup the POST request */

        elementToAddData.setAttribute("method", "POST");
        elementToAddData.setAttribute("action", dataLocation);

    }

}
