<style>

.wrapper {
	display: inline-block;
	height: 500px;
}

.box {
	display: inline-block;
	padding: 7px;
	margin-right: 50px;
	height: 100px;
	width: 100px;
	background-color: #d4efa5;
	white-space: pre-wrap;
	overflow: hidden;
}

</style>

	<div className='wrapper'>
	  <Parallax>
	    <div className='box'>
	      default
	    </div>
	  </Parallax>
	  <Parallax offset={200}>
	    <div className='box'>
	      offset = 200
	    </div>
	  </Parallax>
	  <Parallax scope={500}>
	    <div className='box'>
	      scope = 50
	    </div>
	  </Parallax>
	  <Parallax speed={2}>
	    <div className='box'>
	      speed = 2
	    </div>
	  </Parallax>
	</div>
