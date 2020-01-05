<template>
<div>
    <input type="text" placeholder="Search" v-model="toolSearch">
    <button class="btn">Click</button>
    <br>
    <br>
    <div class="images">
       <div class="image-list" v-for="(item,index) in img" :key="index">
         <h2>{{item.Name}}</h2>
         <h2>{{item.Type}}</h2>
        <img :src="item.Url"/>
        <br><br><br>
        <button class="btn" v-on:click="cancel(index)">Cancel</button>
       </div>
    </div>
    
</div>
</template>
<script>
export default {
    data() {
        return {
            img: [
              {
    Name: "John Frusciante",
    Type: "music",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "Reservoir Dogs",
    Type: "movie",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "Foo Fighters",
    Type: "music",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "Pearl Jam",
    Type: "music",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "Sublime",
    Type: "music",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "Inglourious Basterds",
    Type: "movie",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "Incubus",
    Type: "music",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "Audioslave",
    Type: "music",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "Jackie Brown",
    Type: "movie",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "Nirvana",
    Type: "music",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "The Big Lebowski",
    Type: "movie",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "Goodfellas",
    Type: "movie",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "Guns N' Roses",
    Type: "music",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "Death Proof",
    Type: "movie",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "The Offspring",
    Type: "music",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "Django Unchained",
    Type: "movie",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "Rage Against The Machine",
    Type: "music",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "Snatch",
    Type: "movie",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "Trainspotting",
    Type: "movie",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  },
  {
    Name: "Weezer",
    Type: "music",
    Url: "http://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg"
  }
            ]
          // toolSearch: '',
          // result:[],
          // searched: false  
        }
    },
    methods: {
        cancel(index){
            this.img.splice(index,1)
        }
    //     toolSearch(){
    //       this.result = this.img.filter(item => {return item.Name ===this.toolSearch});
    //       this.searched = true;
    //     }
    // },
    // computed: {
    //   allMovie() {
    //     if (this.searched) {
    //       return this.result;
    //     } else return this.img
    //   }
    // }
}
</script>
<style scoped>
.images {
    display: grid;
    grid-template-columns: auto auto auto;
    width: 88%;
    
}
.btn {
    background-color: aqua;
    width: 100px;
    border-radius: 5px;

}
input {
    height: 35px;
    width: 500px;
    border-radius: 5px;
    background-color: antiquewhite;

}
.image-list {
    /* width: 500px;
    height: 300px; */
}
img {
  width:60%;
}
.btn {
  height: 40px;

}


</style>
