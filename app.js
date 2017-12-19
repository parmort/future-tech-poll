const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Pug Setup
app.set('views', './views');
app.set('view engine', 'pug');

// Stylesheet Setup
app.use("/css", express.static(__dirname + "/css"));

// bodyParser Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Vars
const ques = [
    "Do you think that the possible technological developments of the next 50 years will have a postive impact?",
    "Do you think that you will be able to have custom organs grown in a lab in the next 50 years?",
    "In the next 50 years, will computers be able to replicate human art indistinquishably?",
    "Will the science to teleport objects be around in 50 years?",
    "50 years from now, will we have colonized other planets?",
    "Will people be able to control the weather in 50 years?",
    "Do you think it would be good if parents could alter the DNA of their children in the fetus?",
    "Do you think it would be good if robots would become the primary caregivers for the elderly?",
    "Do you think it would be good if drones had full right-of-way in US airspace?",
    "Do you think it would be good if implants to enhance humans were mainstream?"
]
const stats = [
    {'y': "59% of people agree with you.", 'n': "41% of people agree with you"},
    {'y': "81% of people agree with you.", 'n': "19% of people agree with you"},
    {'y': "51% of people agree with you.", 'n': "49% of people agree with you"},
    {'y': "39% of people agree with you.", 'n': "61% of people agree with you"},
    {'y': "33% of people agree with you.", 'n': "67% of people agree with you"},
    {'y': "19% of people agree with you.", 'n': "81% of people agree with you"},
    {'y': "34% of people agree with you.", 'n': "66% of people agree with you"},
    {'y': "35% of people agree with you.", 'n': "65% of people agree with you"},
    {'y': "37% of people agree with you.", 'n': "63% of people agree with you"},
    {'y': "47% of people agree with you.", 'n': "53% of people agree with you"}
]

function JsonToCapArray(json){
    let out = [];
    for(let val in json){
        let value = json[val]
        out.push(value);
    }
    return out;
}

app.get('/', (req, res) => {
    res.render('index', {questions: ques});
});

app.post('/', (req, res) => {
    let body = req.body;
    let response = JsonToCapArray(body);
    if(response.length != ques.length){
        res.render('index-error', {err: "Please Answer All Questions"});
    }
    res.render('index-post', {answers: response, questions: ques, stat: stats});
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Server started on Port ' + (port)));
