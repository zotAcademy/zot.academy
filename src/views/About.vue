<template>
  <div>
    <div class="container">
      <h1 class="lead title">- Our Vision -</h1>
      <hr class="my-4">
      <p class="lead vision-text" style="text-align: center; padding-bottom: 2em;"> To provide a place for students
        who have knowledge, to share with students that need it. </p>
        <h1 class="lead title">About</h1>

        <p class="lead vision-text" style="margin-left:2em; margin-right: 2em; margin-bottom: 3em;">Zot Academy is a
          self-filtering discussion place of questions, answers,
          and ideas created for the UCI community.<br/><br/> The team’s goal is to tailor the AskMeAnything experience
          for UCI students and staff. Students
          and staff can ask just about anything
          - questions about school events,  school topics, housing,
          or just random things that come to mind. We want Zot
          Academy to bring together students to answer the same question, in the same place. We believe in our UCI
          community to keep Zot Academy a safe and friendly platform for all users.
        </p>

        <hr class="my-4">
        <p class="lead vision-title">Meet the Team </p>
        <div class="container-team">
          <div class="row">
            <div class="col-sm-4">
              <a href="https://www.linkedin.com/in/jessica-zhang-96955b103/">
                <img src="../assets/edward.jpg" alt="Smiley face" height="42" width="42">
              </a>
              <p class="lead team-names"> Edward Xia </p>
              <p class="team-role"> Lead Developer </p>
              <p class="team-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div class="col-sm-4">
              <a href="https://www.linkedin.com/in/jessica-zhang-96955b103/">
                <img src="../assets/juno.jpg" alt="Smiley face" height="42" width="42">
              </a>
              <p class="lead team-names"> Juno Hyun </p>
              <p class="team-role"> Lead Developer </p>
              <p class="team-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div class="col-sm-4">
              <a href="https://www.linkedin.com/in/jessica-zhang-96955b103/">
                <img src="../assets/idan.jpg" alt="Smiley face" height="42" width="42">
              </a>
              <p class="lead team-names"> Idan Imaleh </p>
              <p class="team-role">  Developer </p>
              <p class="team-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. </p>             </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <a href="https://www.linkedin.com/in/jessica-zhang-96955b103/">
                  <img src="../assets/michael.jpg" alt="Smiley face" height="42" width="42">
                </a>
                <p class="lead team-names"> Michael Min </p>
                <p class="team-role">  Developer </p>
                <p class="team-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. </p>
              </div>
                <div class="col-sm-4">
                  <a href="https://www.linkedin.com/in/jessica-zhang-96955b103/">
                    <img src="../assets/andrew.jpg" alt="Smiley face" height="42" width="42">
                  </a>
                  <p class="lead team-names"> Andrew Le </p>
                  <p class="team-role">  Developer </p>
                  <p class="team-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                  <div class="col-sm-4">
                    <a href="https://www.linkedin.com/in/jessica-zhang-96955b103/">
                      <img src="../assets/jessica.jpg" alt="Smiley face" height="42" width="42">
                    </a>
                    <p class="lead team-names"> Jessica Zhang </p>
                    <p class="team-role">  Developer </p>
                    <p class="team-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. </p>
                  </div>
                </div>
              </div>
              <hr>
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
        span{
          float:left;
        }

        img{
          width:50%;
          height:auto;
          border-radius: 50%;
          padding: 0 0 0 0;
          display: block;
          margin-left: auto;
          margin-right: auto;

        }
        .col-sm-4{
          margin-bottom: 4em;
        }
        .team-names{
          text-align: center;
          margin: 0 0 0 0;
        }

        .team-role{
          text-align: center;
          color: #647F92;
        }
        .team-desc{
          padding-left: 3em;
        }


        .container{
          padding: 2em 0 0 0;
          max-width: none;
        }
        .container-team{
          /*top right bottom left*/
          padding: 0 3em 0 3em;
          max-width: none;
        }
        .container-text{
          background-color: #f7f7f8;
        }

        .vision-title{
          font-size: 200%;
          text-align: center;
          margin: 1em 0 2em 0;
        }
        .title{
          font-size: 200%;
          text-align: center;
        }

        .vision{
          font-size: 120%;
        }

        .vision-text{
          font-size: 120%;
        }
        </style>
