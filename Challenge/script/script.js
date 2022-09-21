let text = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up"

        //Remove '$' with split method
        temp = text.split('$');

        //Replace ',' with empty space and wrap text in "" with join method
        document.write(`"${temp.join(" ")}"`)