const billboard$$ = document.createElement('div');
billboard$$.className = 'billboard';
document.body.appendChild(billboard$$);

const h1$$ = document.createElement('h1');
h1$$.textContent = '- Studio Ghibli Films Billboard -';
h1$$.className = 'h1'
document.body.insertBefore(h1$$, billboard$$)
function pintar (films){
    console.log(films);

    for (const film of films) {
        const poster$$ = document.createElement('div');
        const titleSpanish$$ = document.createElement('h3');
        const titleJapanese$$ = document.createElement('h5');
        const image$$  = document.createElement('img');
        const info$$ = document.createElement('div')
        const timer$$ = document.createElement('p'); 
        const  rate$$= document.createElement('p'); 
         
        poster$$.className = 'poster';
        titleJapanese$$.className = 'titleJapanese';
        titleSpanish$$.className = 'titleSpanish';
        image$$.className = 'image';
        info$$.className = 'info';
        timer$$.className = 'timer';
        rate$$.className = 'rate';

        titleSpanish$$.textContent = film.title;
        titleJapanese$$.textContent = film.original_title;
        image$$.src = film.image;
        timer$$.textContent = film.running_time + ' min';
        rate$$.textContent = film.rt_score;



        poster$$.appendChild(titleSpanish$$);
        poster$$.appendChild(titleJapanese$$);
        poster$$.appendChild(image$$);
        poster$$.appendChild(info$$);
        info$$.appendChild(timer$$);
        info$$.appendChild(rate$$);
        billboard$$.appendChild(poster$$)
        
    }
}


fetch('https://ghibliapi.herokuapp.com/films')
.then((films) => films.json())
.then((films) => pintar(films));











