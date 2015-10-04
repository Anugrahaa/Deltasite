var projects_list = [];

function project(m){
  this.no=m.sno;
  this.name  = m.name;
  this.pic   = m.pic;
  this.link   = m.url;
  this.status = m.status;
  this.demo_link = m.demo_link;
}

function handle_projects_data(data){
  for(var i=0;i<data.length;i++){
    projects_list.push(new project({ no: data[i].sno, name: data[i].name, pic: data[i].pic, link: data[i].link, status: data[i].status, demo_link: data[i].demo_link }));
  }
  render_projects();
}


function render_projects(){
  for(var i=0;i<projects_list.length;i++){
    $(".projects").append("\
      <div class='col s4'>\
      <div class='card hoverable white'>\
      <div class='card-image waves-effect waves-block waves-light'>\
      <img class='activator' src="+projects_list[i].pic+" height=180 width=180>\
      <span>"+projects_list[i].name+"</span>\
      </div>\
      <div class='card-reveal'>\
      <span class='card-title grey-text text-darken-4'>"+projects_list[i].name+"<i class='material-icons right'>close</i></span>\
        <span class=project_link style='margin:25px;'>Click <a href="+projects_list[i].link+">here</a> for more details</span><br>\
        <span class=project_status style='margin:25px;'> status: "+projects_list[i].status+"</span><br>\
        <span class=project_demo_link style='margin:25px;'> demo_link: "+projects_list[i].demo_link+"</span><br></div>\
    </div>\
    </div>\
    ");
  }
}

handle_projects_data([
{ "sno":'1',
  "pic":"bla.jpe",
  "name": "abc",
  "url":"asdfg",
  "status":"completed",
  "demo_link":"www.facebook",

  },
  { "sno":'2',
  "pic":"bla.jpe",
  "name": "abc",
  "url":"asdfg",
  "status":"completed",
  "demo_link":"www.facebook",

  },
  { "sno":'3',
  "pic":"bla.jpe",
  "name": "abc",
  "url":"asdfg",
  "status":"completed",
  "demo_link":"www.facebook",

  },
  { "sno":'4',
  "pic":"bla.jpe",
  "name": "abc",
  "url":"asdfg",
  "status":"completed",
  "demo_link":"www.facebook",

  },
  { "sno":'5',
  "pic":"bla.jpe",
  "name": "abc",
  "url":"asdfg",
  "status":"completed",
  "demo_link":"www.facebook",

  },
  { "sno":'6',
  "pic":"bla.jpe",
  "name": "abc",
  "url":"asdfg",
  "status":"completed",
  "demo_link":"www.facebook",

  },
  { "sno":'7',
  "pic":"bla.jpe",
  "name": "abc",
  "url":"asdfg",
  "status":"completed",
  "demo_link":"www.facebook",

  }
]);