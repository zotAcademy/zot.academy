<template>
<div>
  <div class="row">
    <div class="col-md-12">
      <div v-for="question in questions" class="list-group">
        <div class="list-group-item list-group-item-action flex-column align-items-start">
          <h5><a href="#">{{question.questionTitle}}</a></h5>
          <small>By <a href="#">{{question.questionCreator}}</a>  Posted {{question.questionTime}} |
            <a href="#">{{question.questionCount}} comments</a>
          </small>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'summary',
  data () {
    return {
      questions: [
        {
          questionTitle: 'What are we doing?',
          questionCreator: 'Andrew Le',
          questionCount: 300,
          questionTime: '5 days ago'
        },
        {
          questionTitle: 'Whats the problem?',
          questionCreator: 'Andrew Lee',
          questionCount: 10,
          questionTime: '5 days ago'
        },
        {
          questionTitle: 'How is life?',
          questionCreator: 'Andrew Leee',
          questionCount: 20,
          questionTime: '5 days ago'
        },
        {
          questionTitle: 'What is the meaning of life?',
          questionCreator: 'Andrew Leeee',
          questionCount: 40,
          questionTime: '5 days ago'
        },
        {
          questionTitle: 'Am I going to graduate?',
          questionCreator: 'Andrew Leeeeee',
          questionCount: 50,
          questionTime: '5 days ago'
        },
        {
          questionTitle: 'Am I getting a job?',
          questionCreator: 'Andrew Leeeeeee',
          questionCount: 60,
          questionTime: '5 days ago'
        },
        {
          questionTitle: 'Am i doing anything wrong?',
          questionCreator: 'Andrew Lle',
          questionCount: 0,
          questionTime: '5 days ago'
        },
        {
          questionTitle: 'What is Informatics major about?',
          questionCreator: 'Andrew Llee',
          questionCount: 1,
          questionTime: '5 days ago'
        },
        {
          questionTitle: 'What is Software Enginnering about?',
          questionCreator: 'Andrew Llle',
          questionCount: 2,
          questionTime: '5 days ago'
        },
        {
          questionTitle: 'Why do I need to use global variables for?',
          questionCreator: 'Andrew Llllleeeeeeee',
          questionCount: 3,
          questionTime: '5 days ago'
        }
      ]
    }
  }
}
</script>

<style scoped>
.under-title {
  text-align: center;
}

a > div>li{
  display: inline;
}

small{
  display: inline-block;
  white-space: nowrap;
}

small>a{
  text-decoration:underline;
}
a{
  color: #67676e;
}
.list-group-item{
  padding: 1em 1em 1em 1em;
}
</style>
