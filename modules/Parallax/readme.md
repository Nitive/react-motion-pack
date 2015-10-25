<style>

.wrapper {
	display: inline-block;
}

.box {
	display: inline-block;
	padding: 7px;
	margin-top: 100px;
	margin-left: 20px;
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
	  <Parallax max={50}>
	    <div className='box'>
	      max = 50
	    </div>
	  </Parallax>
	  <Parallax min={20}>
	    <div className='box'>
	      min = 20
	    </div>
	  </Parallax>
	  <Parallax speed={2}>
	    <div className='box'>
	      speed = 2
	    </div>
	  </Parallax>
	</div>