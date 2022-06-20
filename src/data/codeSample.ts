export const codeSample = `let currentUser = {
    isLoggedIn:()=>{
        let isLoggedIn = false;
        let token = localStorage.getItem("fake-token");
        if(token && token !== "") {
            isLoggedIn = true;
        }
        return isLoggedIn;
    },
    login: (response)=>{
        localStorage.setItem("fake-token",response.headers["fake-token"]);
        localStorage.setItem("user",JSON.stringify(response.data));
    },
    getToken: ()=>{
        let token = "";
        if(localStorage.getItem("fake-token")) {
            token = localStorage.getItem("fake-token");
        }
        return token;
    },
    logout: ()=>{
        localStorage.removeItem("fake-token");
        localStorage.removeItem("user");
        // window.location.reload();
    },
    getUserDetails() {
        let user = {}
        if(localStorage.getItem("user")) {
            user = JSON.parse(localStorage.getItem("user"));
        }
        return user;
    }
};

let responseCodes = {
    successful: 200,
    dbRequestError: 0,
    parseFormError: 1,
    formFieldsNeededError: 2,
    itemNotFoundError: 3,
    userNotAuthenticatedError: 4,
    userExists: 5,
    wrongCredentials: 6
};

let supportedCountriesNews = [
    {
        name: "Kenya News",
        value: "Kenya"
    },
    {
        name: "DO NOT CHOOSE-Tanzania News",
        value: "Tanzania"
    },
    {
        name: "DO NOT CHOOSE-(Use To Restart PM2)",
        value: "Tanzania1"
    },
    {
        name: "World Sports News",
        value: "World Sports"
    }
]

let locale = {
    getLastSelectedCountry:()=>{
        let country = "Kenya";
        if(localStorage.getItem("country")) {
            country = localStorage.getItem("country");
        }
        return country;
    },
    setCountry:(country)=>{
        localStorage.setItem("country",country);
    },
    getLastSelectedWebsiteCountry:()=>{
        let country = "Kenya";
        if(localStorage.getItem("websiteCountry")) {
            country = localStorage.getItem("websiteCountry");
        }
        return country;
    },
    setWebsiteCountry:(country)=>{
        localStorage.setItem("websiteCountry",country);
    }
}

let systemUsers = {
  john: {
    uuid: 'john-uuid-1',
    username: 'john',
    password: '123456',
    avatar: 'https://bluewavecargo.com/files/slide-1.jpg'
  },
  nas: {
    uuid: 'nas-uuid-1',
    username: 'nas',
    password: '123456',
    avatar: 'https://bluewavecargo.com/files/slide-2.jpg'
  },
  kong: {
    uuid: 'kong-uuid-1',
    username: 'kong',
    password: '123456',
    avatar: 'https://bluewavecargo.com/files/slide-3.jpg'
  },
  hang: {
    uuid: 'hang-uuid-1',
    username: 'hang',
    password: '123456',
    avatar: 'https://targetexpresscargo.com/files/slide-1.jpg'
  }
}


export {currentUser, responseCodes, locale, supportedCountriesNews, systemUsers};
`;
