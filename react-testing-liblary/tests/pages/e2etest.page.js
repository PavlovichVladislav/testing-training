const Page = require('./page');

class E2ETestPage extends Page {
    get toggleBtn () {
        return $('#toggle');
    }

    get input () {
        return $('#search');
    }

    get title () {
        return $('#hello');
    }

    async toggleTitle (text) {
        await this.input.setValue(text);
        await this.toggleBtn.click();
    }

    open () {
        return super.open('teste2e');
    }
}

module.exports = new E2ETestPage();
