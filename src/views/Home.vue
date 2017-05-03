<template>
  <div class="container" style="padding-top:30px">
    <div class="aboutpage">
    <h1> About Zot Accademy </h1>
    </div>
    <p>Zot Accademy is a revolutionized forum that UCI students and faculty can utilize to get expert help from each other.</p>
    <p>Basically we are the better reddit.</p>
<br>
<br>
      <h1 class="text-center">About Us</h1>
  	<div class="row">
  		<div class="col-sm-6">
              <div id="tb-about" class="about about-default">
                  <div class="about-section">
                      This is where Edward can say stuff about himself.
              	</div>
                  <div class="about-desc">
                      <img src="https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100" alt="" />
                      <div class="about-writer">
                      	<div class="about-writer-name">Edward Xia</div>
                      	<div class="about-writer-designation">Lead Front End/Back End Developer</div>
                      	<a href="#" class="about-writer-company">Zot Acadamy</a>
                      </div>
                  </div>
              </div>
  		</div>

          <div class="col-sm-6">
              <div id="tb-about" class="about about-primary">
                  <div class="about-section">
                      What do you want to say about yourself and this application
                  </div>
                  <div class="about-desc">
                      <img src="http://scontent.cdninstagram.com/t51.2885-15/s480x480/e15/11187035_789210007839517_1045787196_n.jpg?ig_cache_key=Mjc0ODU0OTEzMzIxMTQzNzQ4.2" alt="" />
                      <div class="about-writer">
                      	<div class="about-writer-name">Juno Hyun</div>
                      	<div class="about-writer-designation">Front End Developer</div>
                      	<a href="#" class="about-writer-company">Zot Academy</a>
                      </div>
                  </div>
              </div>
  		</div>

          <div class="col-sm-6">
              <div id="tb-about" class="about about-info">
                  <div class="about-section">
                      What do you want to say about yourself and this application
                  </div>
                  <div class="about-desc">
                      <img src="https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100" alt="" />
                      <div class="about-writer">
                      	<div class="about-writer-name">Andrew Le</div>
                      	<div class="about-writer-designation">Front End Developer</div>
                      	<a href="#" class="about-writer-company">Zot Academy</a>
                      </div>
                  </div>
              </div>
  		</div>

          <div class="col-sm-6">
              <div id="tb-about" class="about about-success">
                  <div class="about-section">
                      What do you want to say about yourself and this application
                  </div>
                  <div class="about-desc">
                      <img src="https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100" alt="" />
                      <div class="about-writer">
                      	<div class="about-writer-name">Ki Chan Min</div>
                      	<div class="about-writer-designation">Front End Developer</div>
                      	<a href="#" class="about-writer-company">Zot Academy</a>
                      </div>
                  </div>
              </div>
  		</div>

          <div class="col-sm-6">
              <div id="tb-about" class="about about-warning">
                  <div class="about-section">
                      What do you want to say about yourself and this application
                  </div>
                  <div class="about-desc">
                      <img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAemAAAAJDQzNGIwZWMxLTMyMjEtNGUyOC04MzYwLTA0ZjJiYWQwNzJmNg.jpg" alt="" />
                      <div class="about-writer">
                      	<div class="about-writer-name">Jessica Zhang</div>
                      	<div class="about-writer-designation">Front End Developer</div>
                      	<a href="#" class="about-writer-company">Zot Academy</a>
                      </div>
                  </div>
              </div>
  		</div>

          <div class="col-sm-6">
              <div id="tb-about" class="about about-danger">
                  <div class="about-section">
                      What do you want to say about yourself and this application
                  </div>
                  <div class="about-desc">
                      <img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAZ-AAAAJDI1NGRjYTFlLWU1ZTktNDJmOS1iMWYzLWE0Njk3YTA0ZGZhYg.jpg" alt="" />
                      <div class="about-writer">
                      	<div class="about-writer-name">Idan Elmaleh</div>
                      	<div class="about-writer-designation">Front End Developer</div>
                      	<a href="#" class="about-writer-company">Zot Academy</a>
                      </div>
                  </div>
              </div>
  		</div>
  	</div>
    <div class="container" style="padding-top:30px">
      <div class="aboutpage">
      <h1> Contact Us </h1>
      </div>
      <p>The makers behind Zot Accademy would love to hear your feedback or concerns. Please feel free to email us at: <a href="mailto:zotacademy@gmail.com"> ZotAcademy@gmail.com</a> </p>


      <br/>

      <br/>

  	</div>



  </div>



</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*----------------------------------------------------*/
/*----------------- abouts CSS -----------------*/
/*----------------------------------------------------*/
.aboutpage {
    display: flex;
    align-items: center;
    justify-content: center;
}
.about{
    margin-bottom: 10px;
}

    .about-section {
        width: 100%;
        height: auto;
        padding: 15px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        position: relative;
        border: 1px solid #fff;
    }
    .about-section:before,
    .about-section:after {
        top: 100%;
        left: 50px;
        border: solid transparent;
        content: " ";
        position: absolute;
        border-top-color: #fff;
        border-width: 15px;
        margin-left: -15px;
    }
    .about-section:after {
      margin-top: -1px;
    }

    .about-desc {
        margin-top: 20px;
        text-align:left;
        padding-left: 15px;
    }
        .about-desc img {
            border: 1px solid #f5f5f5;
            border-radius: 150px;
            height: 70px;
            padding: 3px;
            width: 70px;
            display:inline-block;
            vertical-align: top;
        }

        .about-writer{
            display: inline-block;
            vertical-align: top;
            padding-left: 10px;
        }

            .about-writer-name{
                font-weight: bold;
            }

            .about-writer-designation{
                font-size: 85%;
            }

            .about-writer-company{
                font-size: 85%;
            }
    /*---- Outlined Styles ----*/
    .about.about-default{

    }
        .about.about-default .about-section{
            border-color: #777;
        }

        .about.about-default .about-section:before{
            border-top-color: #777;
        }
            .about.about-default .about-section:after{
                border-top-color: #fff;
            }


        .about.about-default .about-desc{

        }
            .about.about-default .about-desc img{
                border-color: #777;
            }

            .about.about-default .about-writer-name{
                color: #777;
            }

    .about.about-primary{

    }
        .about.about-primary .about-section{
            border-color: #337AB7;
            color: #286090;
            background-color: rgba(51, 122, 183, 0.1);
        }

            .about.about-primary .about-section:before{
                border-top-color: #337AB7;
            }
            .about.about-default .about-section:after{
                border-top-color: #fff;
            }

        .about.about-primary .about-desc{

        }

            .about.about-primary .about-desc img{
                border-color: #337AB7;
            }

            .about.about-primary .about-writer-name{
                color: #337AB7;
            }

    .about.about-info{

    }
        .about.about-info .about-section{
            border-color: #5BC0DE;
            color: #31b0d5;
            background-color: rgba(91, 192, 222, 0.1);
        }

            .about.about-info .about-section:before{
                border-top-color: #5BC0DE;
            }
            .about.about-default .about-section:after{
                border-top-color: #fff;
            }

        .about.about-info .about-desc{

        }

            .about.about-info .about-desc img{
                border-color: #5BC0DE;
            }

            .about.about-info .about-writer-name{
                color: #5BC0DE;
            }


    .about.about-success{

    }
        .about.about-success .about-section{
            border-color: #5CB85C;
            color: #449d44;
            background-color: rgba(92, 184, 92, 0.1);
        }

            .about.about-success .about-section:before{
                border-top-color: #5CB85C;
            }
            .about.about-default .about-section:after{
                border-top-color: #fff;
            }

        .about.about-success .about-desc{

        }

            .about.about-success .about-desc img{
                border-color: #5CB85C;
            }

            .about.about-success .about-writer-name{
                color: #5CB85C;
            }

    .about.about-warning{

    }
        .about.about-warning .about-section{
            border-color: #F0AD4E;
            color: #d58512;
            background-color: rgba(240, 173, 78, 0.1);
        }

            .about.about-warning .about-section:before{
                border-top-color: #F0AD4E;
            }
            .about.about-default .about-section:after{
                border-top-color: #fff;
            }

        .about.about-warning .about-desc{

        }

            .about.about-warning .about-desc img{
                border-color: #F0AD4E;
            }

            .about.about-warning .about-writer-name{
                color: #F0AD4E;
            }

    .about.about-danger{

    }
        .about.about-danger .about-section{
            border-color: #D9534F;
            color: #c9302c;
            background-color: rgba(217, 83, 79, 0.1);
        }

            .about.about-danger .about-section:before{
                border-top-color: #D9534F;
            }
            .about.about-default .about-section:after{
                border-top-color: #fff;
            }

        .about.about-danger .about-desc{

        }

            .about.about-danger .about-desc img{
                border-color: #D9534F;
            }

            .about.about-danger .about-writer-name{
                color: #D9534F;
            }

    /*---- Filled Styles ----*/
    .about.about-default-filled{

    }
        .about.about-default-filled .about-section{
            color: #fff;
            border-color: #777;
            background-color: #777;
        }

            .about.about-default-filled .about-section:after{
                border-top-color: #777;
            }

        .about.about-default-filled .about-desc{

        }

            .about.about-default-filled .about-desc img{
                border-color: #777;
                background-color: #777;
            }

            .about.about-default-filled .about-writer-name{
                color: #777;
            }

    .about.about-primary-filled{

    }
        .about.about-primary-filled .about-section{
            color: #fff;
            background-color: #337ab7;
            border-color: #2e6da4;
        }

            .about.about-primary-filled .about-section:after{
                border-top-color: #337AB7;
            }

        .about.about-primary-filled .about-desc{

        }

            .about.about-primary-filled .about-desc img{
                border-color: #2e6da4;
                background-color: #337ab7;
            }

            .about.about-primary-filled .about-writer-name{
                color: #337AB7;
            }

    .about.about-info-filled{

    }
        .about.about-info-filled .about-section{
            color: #fff;
            background-color: #5bc0de;
            border-color: #46b8da;
        }

            .about.about-info-filled .about-section:after{
                border-top-color: #5BC0DE;
            }

        .about.about-info-filled .about-desc{

        }

            .about.about-info-filled .about-desc img{
                border-color: #46b8da;
                background-color: #5bc0de;
            }

            .about.about-info-filled .about-writer-name{
                color: #5BC0DE;
            }


    .about.about-success-filled{

    }
        .about.about-success-filled .about-section{
            color: #fff;
            background-color: #5cb85c;
            border-color: #4cae4c;
        }

            .about.about-success-filled .about-section:after{
                border-top-color: #5CB85C;
            }

        .about.about-success-filled .about-desc{

        }

            .about.about-success-filled .about-desc img{
                border-color: #4cae4c;
                background-color: #5cb85c;
            }

            .about.about-success-filled .about-writer-name{
                color: #5CB85C;
            }

    .about.about-warning-filled{

    }
        .about.about-warning-filled .about-section{
            color: #fff;
            background-color: #f0ad4e;
            border-color: #eea236;
        }

            .about.about-warning-filled .about-section:after{
                border-top-color: #F0AD4E;
            }

        .about.about-warning-filled .about-desc{

        }

            .about.about-warning-filled .about-desc img{
                border-color: #eea236;
                background-color: #f0ad4e;
            }

            .about.about-warning-filled .about-writer-name{
                color: #F0AD4E;
            }

    .about.about-danger-filled{

    }
        .about.about-danger-filled .about-section{
                color: #fff;
                background-color: #d9534f;
                border-color: #d43f3a;
        }

            .about.about-danger-filled .about-section:after{
                border-top-color: #D9534F;
            }

        .about.about-danger-filled .about-desc{

        }

            .about.about-danger-filled .about-desc img{
                border-color: #d43f3a;
                background-color: #D9534F;
            }

            .about.about-danger-filled .about-writer-name{
                color: #D9534F;
            }
</style>
