import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../core/http.service';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  data: any;
  constructor(_http: HttpService) {
    // this.data = _http.get('https://jsonplaceholder.typicode.com/posts?userId=1');
    this.data = [
      {
        'userId': 1,
        'id': 1,
        'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        'body': 'quia et suscipit'
      },
      {
        'userId': 1,
        'id': 2,
        'title': 'qui est esse',
        'body': 'est rerum tempore vitae'
      },
      {
        'userId': 1,
        'id': 3,
        'title': 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        'body': 'et iusto sed quo iure\nvolu'
      },
      {
        'userId': 1,
        'id': 4,
        'title': 'eum et est occaecati',
        'body': 'ullam et saepe reiciendis voluptatem adipisci'
      },
      {
        'userId': 1,
        'id': 5,
        'title': 'nesciunt quas odio',
        'body': 'repudiandae veniam quaerat suntenetur dolor neque'
      },
      {
        'userId': 1,
        'id': 6,
        'title': 'dolorem eum magni eos aperiam quia',
        'body': 'ut aspernatur corporis harum nihil quis doloremque molestiae'
      },
      {
        'userId': 1,
        'id': 7,
        'title': 'magnam facilis autem',
        'body': 'dolore placeat quibusdam ea ri ut quia\nsunt ut sequi eos ea sed quas'
      },
      {
        'userId': 1,
        'id': 8,
        'title': 'dolorem dolore est ipsam',
        'body': 'dignissimos aperiam dolorempossimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'
      },
      {
        'userId': 1,
        'id': 9,
        'title': 'nesciunt iure omnis dolorem tempora et accusantium',
        'body': 'consectetur aam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas'
      },
      {
        'userId': 1,
        'id': 10,
        'title': 'optio molestias id quia eum',
        'body': 'quo et expedita modi cum officia vel magni\ndoloribusccusamus veritatis error'
      }
    ];
  }

  ngOnInit() {
    // this.data.subscribe((value) => {
    //   console.log(value);
    // });
  }

}
