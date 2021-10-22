

class APIService {
    _baseUrl = 'https://illia-ef1b38.postdemo.tcn.asia/api/v2/'

    getResource = async (url) => {
        let res = await fetch(`${this._baseUrl}url`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url} status: ${res.status}`);
        }

        return res.json();
    }

}

export default APIService;