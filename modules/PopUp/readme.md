<style>

important {
  position: relative;
  padding-top: 25px;
  padding-bottom: 1px;
  margin-bottom: 20px;
  display: block;
  line-height: 1.2;
  border-left: 3px solid #900;
  padding-left: 10px;
}


important:before {
  content: 'important';
  position: absolute;
  margin-top: -22px;
  color: #900;
  text-transform: uppercase;
  font-style: normal;
  font-weight: bold;
  font-family: 'PT Sans';
}

:not(pre) code {
  background-color: #f7f7f7;
  border-radius: 3px;
  padding-left: 3px;
  padding-right: 3px;
}

.content {
  width: 500px;
  color: #564a46;
  background-color: #fff5d7;
  border: 3px solid #564a46;
  border-radius: 7px;
  padding: 20px;
  pointer-events: initial;
}

</style>

**Basic PopUp:**  
Change `show` property to see animation

<important>
  You must specify show property to hide element with animation  
  instead to disable rendering. Otherwise you will lose animation.
</important>

    <PopUp
      show={true} // change it to see animation (ProTip: add exclamation mark before true)
      position='static' // to show PopUp inside container (position: fixed by default)
    >
      <div className='content'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusantium ea deleniti alias voluptatum, dolorum ullam eos dolores
        itaque harum adipisci maiores praesentium magni beatae officiis
        at accusamus facere modi vero.
      </div>
    </PopUp>



**Fixed PopUp (Default):**  
Change `show` property to unhide  

    <PopUp
      show={!true} // change it to see animation
    >
      <div className='content'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae vitae
        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
        aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
        nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
        aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
        qui in ea voluptate velit esse quam nihil molestiae consequatur,
        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </div>
    </PopUp>
