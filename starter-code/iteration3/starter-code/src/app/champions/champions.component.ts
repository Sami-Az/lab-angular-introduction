import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'champions-component',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {

  champions: Array<Champion> = [
    new Champion (
      "2015-16",
      "Clevland Cavaliers",
      "http://basket-ballworld.fr/wp-content/uploads/2014/07/cleveland-cavaliers-logo-nba-768x1366-610x400.jpg",
      ["Lebron James", "Kyrie Irving", "Kevin Love", "J.R Smith", "Anderson Varejao"]

    ),
    new Champion (
      "2014-15",
      "Golden States Warriors",
      "https://i.pinimg.com/originals/53/1b/f3/531bf3c54422daf61bfa0b9725ef0410.jpg",
      ["Stephen Curry", "Klay Thompson", "Draymong Green", "Andrew Bogut", "Getsus Ezeli"]
    ),
    new Champion (
      "2013-14",
      "San Antonio Spurs",
      "https://ae01.alicdn.com/kf/HTB1yg3xMpXXXXcTXVXXq6xXFXXX8/San-Antonio-Spurs-logo-fond-noir-drapeau-3-X-5-FT-150-X-90-CM-banni.jpg_640x640.jpg",
      ["Tim Duncuny", "Tony Parker", "Manu Ginobili", "Kawhi Leonard", "Tiago Splitter"]
  )
  ]

  constructor() { }

  ngOnInit() {
  }

}


class Champion {
  constructor(
  public year: string,
  public name: string,
  public championUrl: string,
  public bestPlayers: Array<string>
  ) {}
}
