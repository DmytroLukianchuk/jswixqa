import wixData from 'wix-data';

var score = 0;
var questionnumber = 1;

$w.onReady(function () {
    setTimeout(function(){
        $w("#startgame").show();
    }, 2000);
});

function eraseCollection() {
    wixData.query("questions")
        .find()
        .then((result) => {
            for (var i = 0; i < result.items.length; i++){
                if (result.items[i] === null) continue;
                wixData.remove("questions", result.items[i]._id);
            }
            console.log('erase done');
        });
}

export function nextquestion_onClick(event) {
    if ($w("#nextquestion").label == "Restart") {
        $w("#nextquestion").hide();
        $w("#winnerpic").hide();
        questionnumber = score = 0;
        $w("#score").text = score;

        $w("#questionnumber").text = questionnumber;
        $w("#nextquestion").label = "Next Question";
    }

    questionnumber ++;
    $w("#questionnumber").text = questionnumber;

    $w("#controller2").next().then(function () {
        var random_pop = function (seq) {
            var index = Math.floor(Math.random() * seq.length);
            var result = seq[index];

            seq = seq.splice(index, 1);
            return result;
        };

        var answers_arr = [
            $w("#ahidden").label,
            $w("#bhidden").label,
            $w("#chidden").label,
            $w("#dhidden").label
        ];

        $w("#questionvisible").text = $w("#questionhidden").text;

        var random_one = random_pop(answers_arr);
        var random_two = random_pop(answers_arr);
        var random_three = random_pop(answers_arr);
        var random_four = random_pop(answers_arr);

        $w("#avisible").label = random_one;
        $w("#acorrectanswer").label = random_one;
        $w("#awronganswer").label = random_one;

        $w("#bvisible").label = random_two;
        $w("#bcorrectanswer").label = random_two;
        $w("#bwronganswer").label = random_two;

        $w("#cvisible").label = random_three;
        $w("#ccorrectanswer").label = random_three;
        $w("#cwronganswer").label = random_three;

        $w("#dvisible").label = random_four;
        $w("#dcorrectanswer").label = random_four;
        $w("#dwronganswer").label = random_four;

// show all buttons for next tour and hide wrong / correct
        $w("#avisible").show();
        $w("#bvisible").show();
        $w("#cvisible").show();
        $w("#dvisible").show();

        $w("#acorrectanswer").hide();
        $w("#awronganswer").hide();

        $w("#bcorrectanswer").hide();
        $w("#bwronganswer").hide();

        $w("#ccorrectanswer").hide();
        $w("#cwronganswer").hide();

        $w("#dcorrectanswer").hide();
        $w("#dwronganswer").hide();
    })
}

export function button_visible_onClick(id_visible_button, id_correct_answer, id_wrong_answer) {
    $w(id_visible_button).hide();
    $w("#nextquestion").show();

    if ($w(id_visible_button).label == $w("#dhidden").label) {
        $w(id_correct_answer).show();
        score += 100000;
        $w("#score").text = score;

        if (score === 1000000) {
            $w("#winnerpic").show();
            $w("#nextquestion").label = "Restart"
        }

    } else {
        $w(id_wrong_answer).show();
        $w("#nextquestion").label = "Restart"
    }
}
export function avisible_onClick(event) {
    button_visible_onClick("#avisible", "#acorrectanswer", "#awronganswer");
}

export function bvisible_onClick(event) {
    button_visible_onClick("#bvisible", "#bcorrectanswer", "#bwronganswer");
}

export function cvisible_onClick(event) {
    $w("#cvisible").hide();
    $w("#nextquestion").show();

    if ($w("#cvisible").label == $w("#dhidden").label) {
        $w("#ccorrectanswer").show();
        score += 100000;
        $w("#score").text = score;

        if (score === 1000000) {
            $w("#winnerpic").show();
            $w("#nextquestion").label = "Restart"
        }

    } else {
        $w("#cwronganswer").show();
        $w("#nextquestion").label = "Restart"
    }
}

export function dvisible_onClick(event) {
    $w("#dvisible").hide();
    $w("#nextquestion").show();

    if ($w("#dvisible").label == $w("#dhidden").label) {
        $w("#dcorrectanswer").show();
        score += 100000;
        $w("#score").text = score;

        if (score === 1000000) {
            $w("#winnerpic").show();
            $w("#nextquestion").label = "Restart"
        }

    } else {
        $w("#dwronganswer").show();
        $w("#nextquestion").label = "Restart"
    }
}

export function startgame_onClick(event) {
    // show elements right after Start Game
    $w("#startgame").hide();
    $w("#avisible").show();
    $w("#bvisible").show();
    $w("#cvisible").show();
    $w("#dvisible").show();

    $w("#score").show();
    $w("#youhave").show();
    $w("#maxquestion").show();
    $w("#questionnumber").show();
    $w("#questionbox").show();
    $w("#questionvisible").show();

    $w("#questionvisible").text = $w("#questionhidden").text;

    $w("#questionvisible").show();

    $w("#avisible").label = $w("#ahidden").label;
    $w("#bvisible").label = $w("#bhidden").label;
    $w("#cvisible").label = $w("#chidden").label;
    $w("#dvisible").label = $w("#dhidden").label;

    $w("#acorrectanswer").label = $w("#ahidden").label;
    $w("#bcorrectanswer").label = $w("#bhidden").label;
    $w("#ccorrectanswer").label = $w("#chidden").label;
    $w("#dcorrectanswer").label = $w("#dhidden").label;

    $w("#awronganswer").label = $w("#ahidden").label;
    $w("#bwronganswer").label = $w("#bhidden").label;
    $w("#cwronganswer").label = $w("#chidden").label;
    $w("#dwronganswer").label = $w("#dhidden").label;
}

function eraseCollection() {
    wixData.query("questions")
        .find()
        .then((result) => {
            for (var i = 0; i < result.items.length; i++){
                if (result.items[i] === null) continue;
                wixData.remove("questions", result.items[i]._id);
            }
            console.log('erase done');
        });
}

export function database(event) {
    eraseCollection();
}