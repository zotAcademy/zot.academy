<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2">

      </div>
      <div class="col-sm-4 side-form">
        <p class = "title">Get in Touch </p>
        <p class="lead message">We'd love to hear from you! </p>
        <form class="border">
          <div class="form-group">
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Subject">
          </div>
          <div class="form-group">
            <textarea class="form-control" rows="5" id="comment" placeholder="Message"></textarea>
          </div>
          <button type="button" class="btn btn-secondary btn-lg btn-block">Send</button>
        </form>
      </div>
      <div class="col-sm-4 side-desc">
        <p class="lead description"> Please feel free to shoot us a message if you have any questions
          or comments, or just want to <strong> get in touch!</strong> Also feel free check out our individual
          LinkedIn pages by clicking on our pictures in the <strong>About page.</strong>
          <br/><br/>Phone: (510) 111 - 1111 <br/><br/> Email: Zot.academy@zotacademy.com
        </p>

      </div>
      <div class="col-sm-2">

      </div>
    </div>

  </div>
</div>
</div>
</template>

<script>
import octicons from 'octicons'

export default {
  name: 'about',
  data () {
    return {
      octicons
    }
  }
}
</script>

<style scoped>
.side-desc{
  background-image: url("../assets/mail.png");
  background-repeat: no-repeat;
  background-position: center 6em;
  background-size: 20%

}
.title{
  font-weight: lighter;
  font-size: 50px;
  margin: 1em 0 .5em 0;
}
.message{
  margin: 0 0 2em .2em;

}
.border{
  border-right: 1.5px solid #909090;
}
input{
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0px;
  width: 80%;
}
textarea{
  border-radius: 0px;
  width: 80%;
}
button{
  border-radius: 0px;
  border: none;
  width: 80%;
  background-color: #E0E0E0;
}
.container-fluid{
  margin-left: 0 auto;
  margin-right: 0 auto;
  width: 100%;
}
.description{
  margin-top: 13em;
  margin-left: 2em;
}
</style>
