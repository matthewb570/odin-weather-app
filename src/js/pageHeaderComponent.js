class PageHeaderComponent {

    title;
    actionComponent;

    constructor(title, actionComponent) {
        this.title = title;
        this.actionComponent = actionComponent;
    }

    createComponent() {
        const divPageHeader = document.createElement("div");
        divPageHeader.classList.add("page-header");
        divPageHeader.appendChild(this.createPageTitle());
        if (this.actionComponent != undefined && this.actionComponent != null) {
            divPageHeader.appendChild(this.actionComponent);
        }
        
        return divPageHeader;
    }

    createPageTitle() {
        const divPageTitle = document.createElement("div");
        divPageTitle.classList.add("page-title");
        divPageTitle.textContent = this.title;

        return divPageTitle;
    }
}

export default PageHeaderComponent;