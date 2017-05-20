<template>
  <div class="container-fluid my-3">
    <h1 class="display-4 text-center">Our Vision</h1>

    <hr class="my-3">

    <div class="container mb-5">
      <p class="lead">
        To provide a place for students who have knowledge, to share with students who need it.
      </p>
    </div>

    <h1 class="display-4 text-center">About</h1>

    <hr class="my-3">

    <div class="container mb-5">
      <p class="lead">
        Zot Academy is a self-filtering discussion place of questions, answers, and ideas created for the UCI community.
        <br>
        <br>
        The team’s goal is to tailor the AskMeAnything experience for UCI students and staff. Students and staff can ask just about anything - questions about school events,  school topics, housing, or just random things that come to mind. We want Zot Academy to bring together students to answer the same question, in the same place. We believe in our UCI community to keep Zot Academy a safe and friendly platform for all users.
      </p>
    </div>

    <h1 class="display-4 text-center">Meet the Team</h1>

    <hr class="my-3">

    <div class="container-fuild">
      <div class="row">
        <div class="col col-12 col-md-6 col-lg-4" v-for="profile in profiles">
          <img class="profile-image" :src="profile.picture" :alt="profile.name">
          <p class="profile-name">{{ profile.name }}</p>
          <p class="profile-role">{{ profile.title }}</p>
          <div class="profile-contact text-center">
            <a :href="'https://www.linkedin.com/in/' + profile.linkedin + '/'">
              <img src="../assets/linkedin.png" alt="LinkedIn">
            </a>
            <a :href="'https://www.facebook.com/' + profile.facebook">
              <img src="../assets/facebook.png" alt="Facebook">
            </a>
            <a :href="'mailto:' + profile.email">
              <img src="../assets/email.png" alt="Email">
            </a>
          </div>
          <p class="profile-introduction m-3">{{ profile.introduction }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      profiles: [{
        name: 'Edward Xia',
        title: 'Lead Developer',
        picture: require('@/assets/edward.jpg'),
        introduction: '',
        email: 'xias1@uci.edu',
        linkedin: 'ntkme',
        facebook: 'natsuki.natsume'
      }, {
        name: 'Juno Hyun',
        title: 'Developer',
        picture: require('@/assets/juno.jpg'),
        introduction: '',
        email: 'sjhyun@uci.edu',
        linkedin: 'samueljhyun',
        facebook: 'JUNOBONO'
      }, {
        name: 'Idan Elmaleh',
        title: 'Developer',
        picture: require('@/assets/idan.jpg'),
        introduction: '',
        email: 'ielmaleh@uci.edu',
        linkedin: 'idan-elmaleh-0b7345108',
        facebook: 'idanelmaleh7'
      }, {
        name: 'Michael Min',
        title: 'Lead Developer',
        picture: require('@/assets/michael.jpg'),
        introduction: 'Hey my name is Michael and I like corgis. I have a little booger named Roi who likes to get pats on the head. You can often find me taking a walk on the beach with my dog, or napping at the library!',
        email: 'kcmin@uci.edu',
        linkedin: 'michael-min-7a39a098',
        facebook: 'michael.min.92'
      }, {
        name: 'Andrew Le',
        title: 'Lead Developer',
        picture: require('@/assets/andrew.jpg'),
        introduction: 'Hi! My name is Andrew. I am quite new to the world of computer science and programming. With this fresh mind, I am eager to learn new technologies and programming languages to apply to my own projects. With coding as legos, I am ready to build anything.',
        email: 'leaa1@uci.edu',
        linkedin: 'andrew-le-164325133',
        facebook: 'andrewthechino'
      }, {
        name: 'Jessica Zhang',
        title: 'Lead Developer',
        picture: require('@/assets/jessica.jpg'),
        introduction: 'I am a fourth year undergraduate attending the University of California, Irvine studying Software Engineering. I believe software development and user experience are both important, interdependent and inseparable roles that produce user-centered solutions.',
        email: 'jessicmz@uci.edu',
        linkedin: 'jessica-zhang-96955b103',
        facebook: 'jessica.zhang.35'
      }]
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 760px;
}
.profile-image {
  max-width:50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
}
.profile-name {
  text-align: center;
  margin: 1em 0 0 0;
}
.profile-role {
  text-align: center;
  color: #647F92;
}
.profile-contact img {
  width: 32px;
}
.profile-introduction {
}
</style>
