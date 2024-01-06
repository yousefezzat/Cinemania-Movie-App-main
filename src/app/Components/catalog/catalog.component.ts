import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MovieInterface } from '../../../Models/movie-interface';
import { MovieService } from '../../Services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  baseUrl = environment.baseUrl;
  receivedTopRatedMovies: MovieInterface[] = [];


  constructor(private movieService: MovieService , private router: Router) { }
  

  ngOnInit() {
    this.getTopRatedMovies();

  }
  getTopRatedMovies() {
    this.movieService.getTopRatedMovies().subscribe((movies) => {
      this.receivedTopRatedMovies = movies.results;

    });
  }

  onMovieClicked(id: number){
    this.router.navigate(['Movie', id]);    
  }
  
}