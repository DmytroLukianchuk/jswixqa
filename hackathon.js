var score = 0;

export function nextquestion_onClick_1(event) {
    $w("#controller1").next().then(function () {
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

// show all buttons for next tour
        $w("#avisible").show();
        $w("#bvisible").show();
        $w("#cvisible").show();
        $w("#dvisible").show();

        $w("#correctbutton").hide();
        $w("#wrongtbutton").hide();
    })

}

export function avisible_onClick(event) {
    if ($w("#avisible").label == $w("#dhidden").label) {
        $w("#avisible").hide();
        $w("#correctbutton").show();
        $w("#correctbutton").label = $w("#avisible").label;
        score += 100;
        $w("#score").text = score;

        console.log(score)
    } else {
        $w("#avisible").hide();
        $w("#wrongtbutton").show();
        $w("#wrongtbutton").label = $w("#avisible").label;
    }
}

export function bvisible_onClick_1(event) {
    if ($w("#bvisible").label == $w("#dhidden").label) {
        $w("#bvisible").hide();
        $w("#correctbutton").show();
        $w("#correctbutton").label = $w("#bvisible").label;
        score += 100;
        $w("#score").text = score;

        console.log(score)
    } else {
        $w("#avisible").hide();
        $w("#wrongtbutton").show();
        $w("#wrongtbutton").label = $w("#avisible").label;
    }
}

export function cvisible_onClick_1(event) {
    if ($w("#cvisible").label == $w("#dhidden").label) {
        $w("#cvisible").hide();
        $w("#correctbutton").show();
        $w("#correctbutton").label = $w("#cvisible").label;
        score += 100;
        $w("#score").text = score;
        console.log(score)

    } else {
        $w("#cvisible").hide();
        $w("#wrongtbutton").show();
        $w("#wrongtbutton").label = $w("#cvisible").label;
    }
}

export function dvisible_onClick_1(event) {
    if ($w("#dvisible").label == $w("#dhidden").label) {
        $w("#dvisible").hide();
        $w("#correctbutton").show();
        $w("#correctbutton").label = $w("#dvisible").label;
        score += 100;
        $w("#score").text = score;

        console.log(score)
    } else {
        $w("#dvisible").hide();
        $w("#wrongtbutton").show();
        $w("#wrongtbutton").label = $w("#avisible").label;
    }
}

export function startgame_onClick_1(event) {
    console.log("START GAME");

    $w("#questionvisible").text = $w("#questionhidden").text;

    $w("#questionvisible").show();

    $w("#avisible").label = $w("#ahidden").label;
    $w("#bvisible").label = $w("#bhidden").label;
    $w("#cvisible").label = $w("#chidden").label;
    $w("#dvisible").label = $w("#dhidden").label;
}