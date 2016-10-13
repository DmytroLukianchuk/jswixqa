var score = 0;
var questionnumber = 1;

export function nextquestion_onClick(event) {
    if ($w("#nextquestion").label == "Restart") {
        questionnumber = 0;
        $w("#score").text = 0;
        $w("#questionnumber").text = questionnumber;
        $w("#nextquestion").label = "Nest Question";
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

        $w("#avisible").label = random_pop(answers_arr);
        $w("#bvisible").label = random_pop(answers_arr);
        $w("#cvisible").label = random_pop(answers_arr);
        $w("#dvisible").label = random_pop(answers_arr);

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

export function avisible_onClick(event) {
    if ($w("#avisible").label == $w("#dhidden").label) {
        $w("#avisible").hide();
        $w("#acorrectanswer").show();
        $w("#acorrectanswer").label = $w("#ahidden").label;
        score += 100;
        $w("#score").text = score;

    } else {
        $w("#avisible").hide();
        $w("#awronganswer").show();
        $w("#awronganswer").label = $w("#ahidden").label;
        $w("#nextquestion").label = "Restart"
    }
}

export function bvisible_onClick(event) {
    if ($w("#bvisible").label == $w("#dhidden").label) {
        $w("#bvisible").hide();
        $w("#bcorrectanswer").show();
        $w("#bcorrectanswer").label = $w("bhidden").label;
        score += 100;
        $w("#score").text = score;
    } else {
        $w("#avisible").hide();
        $w("#bwronganswer").show();
        $w("#bwronganswer").label = $w("#bhidden").label;
        $w("#nextquestion").label = "Restart"
    }
}

export function cvisible_onClick(event) {
    if ($w("#cvisible").label == $w("#dhidden").label) {
        $w("#cvisible").hide();
        $w("#ccorrectanswer").show();
        $w("#ccorrectanswer").label = $w("chidden").label;
        score += 100;
        $w("#score").text = score;
        console.log(score)

    } else {
        $w("#cvisible").hide();
        $w("#cwronganswer").show();
        $w("#cwronganswer").label = $w("#chidden").label;
        $w("#nextquestion").label = "Restart"
    }
}

export function dvisible_onClick(event) {
    if ($w("#dvisible").label == $w("#dhidden").label) {
        $w("#dcorrectanswer").label = $w("dvisible").label;
        $w("#dvisible").hide();
        $w("#dcorrectanswer").show();
        score += 100;
        $w("#score").text = score;

    } else {
        $w("#dvisible").hide();
        $w("#dwronganswer").show();
        $w("#dwronganswer").label = $w("#dhidden").label;
        $w("#nextquestion").label = "Restart"
    }
}

export function startgame_onClick(event) {
    console.log("START GAME");

    // show elements right after Start Game
    $w("#startgame").hide();
    $w("#avisible").show();
    $w("#bvisible").show();
    $w("#cvisible").show();
    $w("#dvisible").show();
    $w("#nextquestion").show();
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
}