(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{134:function(A,e,t){},136:function(A,e,t){"use strict";t.r(e);var a=t(3),n=t.n(a),r=t(11),u=t.n(r),l=t(53),i=t(54),o=t(63),c=t(61),m=t(27),s=t(56),R=t.n(s),d=t(58),N=t.n(d),j=(t(74),t(57)),v=t.n(j),y=function(A){Object(o.a)(t,A);var e=Object(c.a)(t);function t(){var A;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(A=e.call.apply(e,[this].concat(r))).state={text:"",date:new Date},A.render_reminders=function(){var e=A.props,t=e.reminders,a=e.remove_Reminder;return n.a.createElement("ul",{className:"list-group-item"},t.map((function(A){return n.a.createElement("li",{key:A.id},n.a.createElement("div",null,A.text),n.a.createElement("div",null,R()(new Date(A.date)).fromNow()),n.a.createElement("button",{className:"closeIcon btn btn-danger",onClick:function(){a(A.id)}},"X"))})))},A}return Object(i.a)(t,[{key:"render",value:function(){var A=this,e=this.props,t=e.add_Reminder,a=e.clear_Reminders,r=this.state,u=r.text,l=r.date;return n.a.createElement("div",{className:"App"},n.a.createElement("img",{src:v.a,alt:""}),n.a.createElement("div",{className:"reminder-title "},n.a.createElement("h2",null,"What should you do ?")),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter What you think",onChange:function(e){return A.setState({text:e.target.value})},value:u}),n.a.createElement(N.a,{className:"form-control",placeholder:"enter date",value:l,selected:l,onChange:function(e){return A.setState({date:e})},showTimeSelect:!0,timeFormat:"HH:mm",timeCaption:"time",dateFormat:"MMMM d, yyyy h:mm a"}),n.a.createElement("button",{className:"btn btn-primary btn-block",onClick:function(){if(""===u||l===new Date)return!1;t(u,l),A.setState({text:"",date:new Date})}},"Add Reminder"),this.render_reminders(),n.a.createElement("button",{onClick:a,className:"btn btn-danger btn-block clearReminder"},"Remove Reminders"))}}]),t}(a.Component),p=Object(m.b)((function(A){return{reminders:A}}),{add_Reminder:function(A,e){var t={type:"ADD_REMINDER",text:A,date:e};return console.log("Add",t),t},remove_Reminder:function(A){var e={type:"REMOVE_REMINDER",id:A};return console.log("remove",e),e},clear_Reminders:function(){var A={type:"CLEAR_REMINDERS"};return console.log(A,"Clear All"),A}})(y),V=t(22),E=t(62),q=t(21),x=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;A=Object(q.read_cookie)("reminders");var t=[];return"ADD_REMINDER"===e.type?(t=[].concat(Object(E.a)(A),[{text:e.text,date:e.date,id:Math.random()}]),Object(q.bake_cookie)("reminders",t),console.log("From reducer",t),t):"REMOVE_REMINDER"===e.type?(t=A.filter((function(A){return A.id!==e.id})),Object(q.bake_cookie)("reminders",t),t):"CLEAR_REMINDERS"===e.type?(t=[],Object(q.bake_cookie)("reminders",t),t):A},W=(t(133),t(134),Object(V.b)(x));u.a.render(n.a.createElement(m.a,{store:W},n.a.createElement(p,null)),document.getElementById("root"))},57:function(A,e){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANDg0NDQ8PDQ0NDQ0NDQ4NDRANDQ0OFRUWFxURFRUYHSggGBomHRUVITEhJSkrLi4vFx8zOTMtNyguLisBCgoKDQ0OFxAQFSseHx0uKysvNzcrLSsrLS4uLSsrNy4rLy0wLSsuNysvLy8tLS0rKy4rLysrListNy0tLSsrLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEEBQcIAwL/xABJEAABAwIBBQoLBwEHBQEAAAAAAQIDBBEFEiFUlNEHExQVFjFRYZOiBhc1QVNVdIGRwuEiMkJScaHBsSMzQ2JjcoIlZISS8EX/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFBgIB/8QAMhEBAAIBAgQDBgUEAwAAAAAAAAECAwQREiExQVFhcTJCgZHB0RNyobHhUmKC8BQiM//aAAwDAQACEQMRAD8A0aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKogGRpPB+tntvNHUy35lZTyOT4olgMpHuf4u7mw6q98eT/UD2Tc2xlf/wA6o7m0B4tcZ9XT9zaA8WuM+rp+5tAeLXGfV0/c2gPFrjPq6fubQHi1xn1dP3NoDxa4z6un7m0B4tcZ9XT9zaA8WuM+rp+5tAeLXGfV0/c2gPFrjPq6fubQC7m2M+rp+5tA8n7nuLt58Oqfcy/9FAxtX4NV8F99oqqO3OrqaRG/G1gMW5qoqoqKipzoqWVAKAAAAAAAAAAH1HG57kaxFc5yo1rWornOVeZEROdQNu+BO4tLO1s+LPdTRrZzaaO2/uT/ADu5mfpz/oBt3A/A/DsPaiUtHCxURP7RzN8lXrV7rqBnkzZkzJ1ALgAAABcAAAALgLgAFwFwFwFwMTjHg1Q1zVbV0kE1/wATo0R6daOTOgGqPDLcRREdNg8i3S68Ende6dDJOnqd8QNM1tJJTyPhnY6KWNytex7Va5qp5lQDwAAAAAAB9Rxq9zWNRXOcqNa1EurnLmRETpA6O3KtzdmGRsrKxjZMQkblIjkym0jV/Cn+fpUDZIAAAAAAAAAAAAAAAAAAAAAACF7o/gBBjUKvajYq+Nq7zPa2X/pydKdfmA5ixCikpZpKedixzQvVkjHZla5ALcAAAAANvbgngik8z8VnbeOmdvdK1yZnT2zv/wCKL8V6gN9gAAAAAAscSxJKbIRYZ5svK/uIt8ybW+9nzc/7KBZco00Su1b6gOUaaJXat9QHKNNErtW+oDlGmiV2rfUByjTRK7VvqA5Rpoldq31Aco00Su1b6gOUaaJXat9QHKNNErtW+oDlGmiV2rfUByjTRK7VvqA5Rpoldq31Aco00Su1b6gOUaaJXat9QHKNNErtW+oGp923C2VbGYnBS1UU0KIyqdJTqxj4vwvVUVc6Lm/ReoDTIAAAAqgHXXgNhCYfhlFSollZA10lkteV/wBp6/FVAztwPCrrGwtRXqt3LksY1Mp73dDWpzqQ5s9MUb279I6zPpCXFhvlnavbr4R6ysZMSlRc7IIb8zaiqayRU/REW3xKl9XlrPOta/mvtK1XTYpjla1vSu8fu9ocS+01k7Fhc9bRuykkhkXoR6efqWxLTV7WiuWvDM9Oe9Z9J+ko76XlNsduKI68tpj1j7L+5cVC4C4C4C4C4C4C4C4C4C4C4C4C4C4C4C4C4FridE2qp56aRMqOeKSJ6LzWcioBxziFI6nmmgf96GWSJ36tcqL/AEAtwAADJeDdNv8AXUUNr77V07FTqV7UX9gOxbWzdGYABGMUr1YklQn95JK+mp19FEzM9zetV/gwNXqrUi2aPatM1r5RHWY85n6NzS6eLzXFPSIi1vOZ6RPpCMOW6qq51XOqrnVV6znpned5bkbRG0Mlg1XZ6U8n2qedUjexeZqrzPToVFsXtDn2v+DfnS/KY9e8eHNT1mHev4tOV684n07SmGEyudGrXrlSQyPhe78ytXM73pZTqNHe1sfDad5rM1n4fxs5zV0rXJvWNotEWj4/yvC0rAAAAAAAAAAAAAAAAAAAAcq7q9LvOOYk1EsjpklTry2Ncq/FVAiQAABJtzWPLxrDG/8Adxr8M/8AAHWIACJYxSqsUjES76SoleqedYJVykf/APdCnNa7BNsVo747TP8Ajbnu6HR5ojJW09MlYj/KvLZHjDbC9walWWePzMjckkjl5mMat1VV9xc0OGcuavhXnPlEc1XWZYx4reM8o85lMsGusb5Vzb/NJM1F58hVs39kRfedToudJyf1zNvh2/SHN6zaLxT+iIj49/1X5cVAAAAAAAAAAAAAAAAAAAAOad3SPJxyZfzQUzu7b+ANfAAAEr3K0/65hntHyuA6rAAWtZR74rZGO3qZiKjXol0Vq87HJ+JpWz6fjmL1nhtHfy8JjvCxhz8ETS0cVZ7fWPCWHmwi63fRMc7zup6ne43f8VtYzL6Hed7aeJn+220fKdtmjTW7RtXPMR513n5x1XdNhaq3Ie2OCC6K6CFVe6Vf9SRedOpPiWcWjtw8NoilPCOcz+afor5NXETxVmbW8Z5bflj6suhps5UCgFQKAAAFQKAAKgAKAAKgUAAVAoBzfu9J/wBbd7JTf0UDXIAABLNyry7hntHyuA6qAAAKgUAAALLEYah+RwaVkVsrLy498yua1ujz/ECz4LiGlQauA4JiGlQauA4JiGlQauA4JiGlQ6uA4JiGlQauA4JiGlQauA4JiGlQauA4JiGlQauA4JiGlQauA4JiGlQauA4JiGlQauA4JiGlQauA4LiGlQauA4JiGlQauA4JiGlQauA4JiGlQauBoDdsZK3F1Sd7ZZOC0/2mMyEtnslgICAAASzcq8u4Z7R8rgOqrgAMVimIua50MLmMcxiSVE8qXipY15lVPxOWy2Qt4METEXvEzEztER1tP2jvKnn1ExM0pMRMRvMz0rH1me0ItPjtPlZ1rqlfSuqnU6L1tYyyInuQ1qaPNt7lfLh3+cyyL6zDv79vPi4flEMnhmMKrVkp5JahkaZU1LU2dVRx+eSJ6ffROhb/ABKufSxvw5KxWZ6Wj2ZnwmO3qtYNXO3FjtNojrWfaiPGJ7+iUQzNka2Rio5j2o5rk5lavMplWrNZmto5w162i1YtWd4l9nl6AAAAAAAAAAAAAXAAAAAABzfu9+W19kpvmA1yAAASvcq8u4Z7R8rgOqwAEA8IZ3cGTpqq6rfKvTvTshjF6kS3wOi0dI/F/JWsR8Y3mXN6y8/g/nvaZ+E7RH++CNGoy17g1Q6Kpp3s50mjbm87XKjXJ70VSDU0i+G9Z8JTaa80zUtHjH68mw8ATJbURJ9yGsqI4+piqjre5XKhzerneaXnrasTP7fR0+jjat6R0raYj9/qyZUWwCoFAKgAAAAAAAAAACgFQAFAOcN3vy0vslN8wGuQAACV7lXl3DPaPlcB1UAAimN4cirJTPVI2zzLU0Urs0bZ3J/aQOXzXzqn69RsaXPMbZIjeaxw2jvt2mPTpLG1eCOeK07RaeKs9t+9Z9esfwidThdRE7IkglR3VGrkX9FS6Ka9NRhvG9bx82NfT5qTtak/Lf8AZlcGwp1O5lVVMVuS5FpqdU/tqmb8KI3nREXPdegqanUxkicWKfWe0R35rmm01scxlyx09mO9p7ck2wildDC1siosr3PlmVOZZXrlOt1Je3uMLUZIyZN69I5R6Q39NinHjiLdZ3mfWea8IE4AAAAAAAAAAAAAAAAAAAHOG735aX2Sm+YDXIAABK9yvy5hntHyuA6qAAec8LZGqyRrXsclnNciK1fceqXtSeKs7TDzelbxw2jeJY9MGRuaKoqoWfkZPlNROhMtFVCzOrmedqVmfT7bK0aSK8qZLVj1++73o8LihcsiI58qpZZpnullVOjKXmTqQjyajJkjhnlHhEbQkxabHjnijnPjM7z+q9IE4B5yTNZbLe1l+bKcjb/ED44XF6WLtGbQHC4vSx9ozaA4XF6WPtG7QHC4vSx9ozaA4XF6WPtGbQHC4vSx9ozaA4XF6WPtGbQHC4vSx9ozaA4XF6WLtGbQHC4vSx9ozaA4XF6WPtGbQHC4vSx9ozaA4XF6WPtGbQHC4vSx9ozaA4XF6WPtGbQHC4vSx9ozaBzru7SNdjSq1yOTglNnaqOT8XnQDXYAABK9yry5hntHyuA6qAoAVURLrmRM6quZEQ+TO3OSZ2WK4vD+FzpETnWKKSRqe9qWKv8AzcPaZn0iZj9IV/8AlYu07+kTK4payOa+9vR9vvImZzf1Rc6E2PNjyexbfZJTLS/szu9yVIAWtbh0NRk79G2TIvk5V817X5v0QC25P0mjx97aA5P0mjx97aA5P0mjx97aA5P0mjx97aA5P0mjx97aA5P0mjx97aA5P0mjx97aA5P0mjx97aA5P0mjx97aA5P0mjx97aA5P0mjx97aA5P0mjx97aA5P0mjx97aA5P0mjx97aA5P0mjx97aA5P0mjx97aBz7u30scGMKyJiRs4LTrktva65WcDX4AABK9yvy5hntHyuA6ouAuBgsVq2rvj5EyoIXpEyK9knn51yv8rejqUydVmrPFa/OtZ2iP6reflH3Z+oyxO8251rO0R4z5+UMJJjNQ5b74rETmbGiMa1OhEMy2u1Ez7e3pyhn21eafe29F5QYgtQ9rJVRs/+BUIiNcjvMx9vvNXmLODUTmtFbztf3bd9/CfGJT4c85bRW0/9u0/SfVJKCp32Nr1TJdna9v5XtWzk+KG1gy/i0i0xtPSfWOUtTDk46RPSe/quLkyUuAuAuAuAuAuAuAuAuAuAuAuAuAuAuAuAuBzju8+Wl9kpvmA10AAASvcr8uYZ7R8rgOqAAERxdi7w3/Tq6psn+5zspqr7v6nO6us/hR5XvE/Gd4/Ri6mJ/Djytbf4zuwxnKK4w5iunha3nWVlvcqLf9iXT1m2WkR13hJhiZyViPGExwpbpO5Puvqplb1oioir8UU6TSzvF7R0m0/b925p+cXntNpXxaWAAAAAAAAAAAAAAAAAAAAOcd3ny0vslN8wGugAACV7lflzDPaPlcB1OAuBjcQo1u97Wb6yVEbUQ3sr7cz2L5nJ+5R1GCd5tWvFFvajx8484Vc2Kd5tEbxPWPrHmj8uHQ3zVKRp+SojcyRvV1+4yLabDvyy8PlaJiWZbT4t+WTb1iYlf4bQo26U+U57kyXVUjFjZG1efe2rnV3WW9Pp9uWHeZnlNpjaIj+2J6ys4MMR/wCfOZ97baI9Egp4mxsbGxLNYiNRDXx0rjrFa9IaVKRSsVjpD7Pb0AAFwFwFwAC4AAAAALgLgAFwAC4HOW7z5aX2Sm+YDXQAABK9yzy5hntHyuA6nAAAAAAAAssRr1gyLQTT5WV/csysm1uf9b/sBZ8eu0Ks7JNoDj12hVnZJtAceu0Ks7JNoDj12hVnZJtAceu0Ks7JNoDj12hVnZJtAceu0Ks7JNoDj12hVnZJtAceu0Ks7JNoDj12hVnZJtAceu0Ks7JNoDj12hVnZJtAceu0Ks7JNoDj12hVnZJtAceu0Ks7JNoDj12hVnZJtA0Hu1VKzYur1jkhXgtOmRK3Jfmvnt0AQIAAAlW5Z5cwz2j5XAdUAALSvr2wZKWdJLIqpFDGl5JFTn/RE86rmQlxYpvvPSI6z2hJjxTfeekR1lip8Xla60k9DTu88SrJO9vU5zVREX3FqunpMb1pa3nyj7rNcFJjlW1vPlH3XNPi6tyVqGx709Uayqp5N8p1cvM1187F/W6dZHbTxO/BM7x2mNp+Hijtgid+CZ3jtPKf5ZcqKwAAAAAAAAAAAAAAAAAAAADnLd48tO9kpv6OA10AAASbc0fk41hi/wDdMT43T+QOqwAENxnEHMjmnaqpLVTy00bkX7UdNCuSqN6FV2f39RsafDFrVpPSsRM+cz4+kNTBiibVpPSsRPrMooiGo0mTwCs3qZsbvtQVCpDPGv3XNdmvbpS/OVtVj4qcUda84+CDUY+Km8da84TnA3u3p0T1VzqaaSnVy87msX7Kr15KtMTUxHHFo96In5/yx9REcXFHvRE/P+WRK6AAAAAAAAAAAAAAAAAAAADm7dyffG5U/LT0ze7f+QNfgAAGV8FanecQoJebIrKdyr1ZaX/a4HXigAIZjNA58c0DUVZaWeWoY3zyU0y5Sq3ps7Mv6dZsafNEWreeloiPSY5fq1cGWItW09LREekx90VNRoslgNHvszZHfZgp1SaeRczWtbntfpWxW1OThpNY625RHqg1GThpMR1tyhOsCa7enSvRWuqZpKjJXna1y/ZRevJRpiamY44rHuxEfL+WPqJji4Y92Ij/AH4siV0AAAAAAAAAAAAAAAAAAAAHLu6zU77jmILe6MkZEn/FjUX97gRAAAAq1yoqKmZUVFRehQOu/BbE0raCjqmrffoI3O6nolnJ8UUDKgWlfQNmyXZTopY7rFNHZHsVedOhUXzouYlxZZpvG28T1hJjyzTeNt4nrDEz4PI51309DO5eeW8tO53W5rUVF+JarqaRG0XtXy5T9lmuesRyvavlyn7LqnwhXZKTrGkTFRzKWnZvdPlJzK++d/vsnUR31ERvwb7z3nnPw8Eds8Rvwb7z3nr8PBlyorAAAAAAAAAAAAAAAAAAAAeVVUNhjkmetmRMfI9V8zWoqr/QDj7F61aqpqKl3PPNLKt/NlOVbfuBaAAAADdO4J4UpaTCJnWW7p6S/Mt/7yNOv8XxA3OAAAAAACyxGmmkyN5qFp8nKyrRNky72tz81s/xAtOLazT11WPaBTi2r9YLqse0BxbWesF1WPaBXi2r9YLqse0BxbWesF1WPaA4trNPXVY9oFOLaz1guqx7QK8W1mnrqse0CnFtZp66rHtAcW1mnrqse0CvFtXp66rHtApxbWaeuqx7QHFtZp66rHtArxbWesF1WPaA4trNPXVY9oGuN2TG5qGlSh4as0tY1UkjSFkeTT+dVVOlc3xA0cAAAAAHvRVclPLHNC5Y5Yno+N7VsrXJzKB0vuc+HUWMwI1ytjrompv8N7Zdv8RnSi/sBMgAAAAAAAAAAAAAAAAAAAAAAEe8NfC2nwemWaZUdK5FSngRftyv/hvSoHMGO4xNiFTLV1LsuWV11/K1PM1qeZEQDHgAAAAAAuKCtlppWT08jopY1ymPYtnNUDdngZuzRSo2HFm7xLmalTG1Vif1vamdq9aZgNpUGIQ1TEkppo52Kl0dE9r0/YC5uAuAuAuAuAuAuAuAuAuAuAuAuAuAuAuB5VNTHC1XyvZExM6ukejGp71A1x4X7sNJSNdFh9q2o5kfnSmYvTlfj93xA0ZjmM1GITvqauR0sr/Ov3Wp5mtTzJ1AY8AAAAAAAAAAuKOtlgdlwSyQu/NFI6NfiigSOk3R8Xhsja+VyJ5pEZLf/wBkVQMnHuv4w3nlhd/up2fwB6puy4v+amX/AMZNoFfHNi3TS6sm0B45sW6aXVk2gPHNi3TS6sm0B45sW6aXVk2gPHNi3TS6sm0B45sW6aXVk2gPHNi3TS6sm0B45sW6aXVk2gPHNi3TS6sm0B45sW6aXVk2gUXdlxbpptWTaB5v3YMXX/Fgb/tp2fyBjqvdMxiW9657EXzRMjj/AHRtwI5X4pUVS5VTPLOt7/2sjn2/S65gLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z"},64:function(A,e,t){A.exports=t(136)}},[[64,1,2]]]);
//# sourceMappingURL=main.5acd2697.chunk.js.map