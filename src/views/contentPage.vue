<template>
  <div class = "body">
    <div class = "text-center">
      <ul class="pagination pagination-sm pg-bluegre justify-content-center">
        <li class="page-item">
          <a class="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>

        <li class="page-item active"><a class="page-link">1</a></li>
        <li class="page-item"><a class="page-link">2</a></li>
        <li class="page-item"><a class="page-link">3</a></li>
        <li class="page-item"><a class="page-link">4</a></li>
        <li class="page-item"><a class="page-link">5</a></li>

        <li class="page-item">
          <a class="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="row content">
        <div class = "col-md-3"> </div>
        <div class = "col-md-6 poop">
          <AppQuestionSummary></AppQuestionSummary>
        </div>
        <div class = "col-md-3"> </div>
      </div>
    </div>
  </div>


</template>

<script>
import AppQuestionSummary from '@/components/AppQuestionSummary'

export default {
  name: 'createQuestionSummary',
  components: {
    AppQuestionSummary
  }
}
</script>


<style scoped>

.poop {
  text-align:center;
  background-color: white;
  padding: 0 0 0 0;
}

.text-center{
  padding-top: 1em;
  padding-bottom: 1em;
  margin-bottom: 0;
  background-color: white;

}

div > ul{
  margin-bottom: 0;
}

.container{
  margin-top: 1em;
  height: 100%;
  width: 100%;
  /*position: absolute;*/
}

.body{
  background-color: #f4f4f5;
}

</style>
