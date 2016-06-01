var app = angular.module('app', ['ngAnimate']);

app.controller('MainController', function($scope, $http){
  $scope.newComment = {};
  $scope.newPost = {};
  $scope.view = {};

  var view = $scope.view;
  view.searchText = "";
  view.newPostVisible = false;
  view.sortableFields = ['votes', 'date', 'title'];
  view.currentSort = $scope.view.sortableFields[0];
  view.orderVal = '-votes';

  // $.get('https://www.reddit.com/.json').done(function(result){
  //   console.log(result);
  //   $scope.redditPosts = result.data.children;
  //   $scope.$apply();
  // });
  // $http.get('https://www.reddit.com/.json').then(function(result){
  //   console.log(result);
  //   $scope.redditPosts = result.data.data.children;
  // });

  view.postings = [
    {
      title: 'Yosemite',
      author: 'National Parks',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Yosemite_Valley_from_Wawona_Tunnel_view,_vista_point..JPG',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      date: Date.now(),
      votes: 10,
      comments: [
        {
          text: 'This is the text',
          name: 'Bill'
        },{
          text: 'More comments',
          name: 'Joe'
        }
      ],
      viewComments: false,
      addComment: false
    },
    {
      title: 'Lake Powell',
      author: 'National Parks',
      image: 'https://picturesandplanetickets.files.wordpress.com/2012/09/lake-powell1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      date: Date.now(),
      votes: 4,
      comments: [
        {
          text: 'This is a text',
          name: 'Bill'
        },{
          text: 'More commentary',
          name: 'Joe'
        }
      ],
      viewComments: false,
      addComment: false
    },
    {
      title: 'Mount Rainier',
      author: 'National Parks',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Mount_Rainier_from_above_Myrtle_Falls_in_August.JPG',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',

      // Each post's date/time is displayed nicely: "Yesterday at 3:09pm", "Last Thursday at 4:42am", etc. You will need an external library. Watch the video for more details.
      date: Date.now(),
      votes: 6,
      comments: [
        {
          text: 'This is the text',
          name: 'Bill'
        }
      ],
      viewComments: false,
      addComment: false
    }
  ];
  // $scope.upvote =  function (post) {
  //   post.votes++;
  // }
  //
  $scope.DownVote = function(post) {
    post.votes--;
  };

  $scope.UpVote = function(post) {
    post.votes++;
  };

  $scope.NewComment = function() {
    $scope.newComment.text =
    view.postings.comments = {
      text: text,
      name: name
    }
  };

  $scope.toggleNewPostVisibility = function() {
    $scope.view.newPostVisible = !$scope.view.newPostVisible;
  };

  // $scope.submitForm = function(isValid) {
  //   $scope.view.postings = $scope.view.postings || []
  //   event.preventDefault()
  //   if (isValid) {
  //     $scope.view.postings.push($scope.posting);
  //     $scope.posting = {}
  //     $scope.userForm.$setPristine()
  //   }
  // view.postings.push(new $scope.Post)


  // $scope.$watch('postings', function(newValue, oldValue) {
  //   console.log('text changed from', oldValue, 'to', newValue);
  // });

  // Posts dynamically reorder according to number of votes
  view.order = 'votes';

  $scope.submitForm = function() {
    // event.preventDefault();
    $scope.newPosting.date = Date.now();
    $scope.newPosting.votes = 0;
    $scope.newPosting.comments = [];
    $scope.newPosting.viewComments= false;
    $scope.newPosting.addComment = false;
    $scope.view.postings.push($scope.newPosting);
    $scope.view.newPostVisible = false;
    $scope.newPosting = {};
    $scope.postForm.$setPristine();
  }
  $scope.submitForm = function() {
    // event.preventDefault();
    $scope.newPosting.date = Date.now();
    $scope.newPosting.votes = 0;
    $scope.newPosting.comments = [];
    $scope.newPosting.viewComments= false;
    $scope.newPosting.addComment = false;
    $scope.view.postings.push($scope.newPosting);
    $scope.view.newPostVisible = false;
    $scope.newPosting = {};
    $scope.postForm.$setPristine();
  }
});


// A user can add a new comment to a specific post
// A user can search through posts
// A user can sort posts by votes, date, and title.
// Animate posts as they are added and removed from the search results.
