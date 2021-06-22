import { Component, OnInit } from '@angular/core';
import  * as configurationsJson  from 'src/app/utils/static/configurations.json';
import * as _ from 'lodash';
import configuration from 'src/app/models/configuration';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  configurationsData: any = configurationsJson;
  configurations: Array<configuration> = this.configurationsData.data;
  listingHeaders: Array<any> = [];
  sortParams: any = {
    sortBy: 'name',
    sortOrder: 'asc'
  };
  selectedConfigs: Array<any> = [];
  searchedText: string = '';
  minPriceText: any;
  uniqueConfigurations: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.listingHeaders = [
      {
        key: 'name',
        value: 'Name'
      },
      {
        key: 'building.name',
        value: 'Building Name'
      },
      {
        key: 'building_towers.tower_name',
        value: 'Tower Name'
      },
      {
        key: 'property_type.name',
        value: 'Property Type Name'
      },
      {
        key: 'configuration.name',
        value: 'Configuration Name'
      },
      {
        key: 'min_price',
        value: 'Min Price'
      },
      {
        key: 'bedroom',
        value: 'Bedroom'
      },
      {
        key: 'bathroom',
        value: 'Bathroom'
      },
      {
        key: 'half_bathroom',
        value: 'Half Bathroom'
      }
    ];
    this.uniqueConfigurations = _.uniqBy(this.configurations, 'configuration.id');
    this.sortConfs('name', 'desc');
  }
  
  /**
   * To filter the results by search and select options
   */
  filterRecords(): void {
    let fielteredConfs: Array<configuration> = [];
    let filterApplied = false
    // Filter the result if atleast one configuration is select
    if (this.selectedConfigs.length) {
      fielteredConfs = this.configurationsData.data.filter((conf: configuration) => this.selectedConfigs.includes(conf.configuration.id));
      filterApplied = true;
    }
    // Filter the result if min-price is entered
    if (this.minPriceText) {
      let filteredFrom = filterApplied ? fielteredConfs : this.configurationsData.data;
      fielteredConfs = filteredFrom.filter((conf: configuration) => conf.min_price > this.minPriceText);
      filterApplied = true;
    } 
    // Filter the result by search option
    if (this.searchedText) {
      let searchedText = this.searchedText.toLowerCase();
      let filteredFrom = filterApplied ? fielteredConfs : this.configurationsData.data;
      fielteredConfs = filteredFrom.filter((conf: configuration) => {
        return conf.name.toLowerCase().includes(searchedText) || conf.building.name.toLowerCase().includes(searchedText) || conf.building_towers.tower_name.toLowerCase().includes(searchedText) || conf.property_type.name.toLowerCase().includes(searchedText) || conf.configuration.name.toLowerCase().includes(searchedText)
      });
      filterApplied = true;
    }
    this.configurations = filterApplied ? fielteredConfs : this.configurationsData.data;
    // Call the method to sort the filtered result
    this.sortConfs(this.sortParams.sortBy, this.sortParams.sortParams);
  }

  /**
   * To sort the results
   */
  sortConfs(sortBy: any, sortOrder: any): void {
    if (sortBy === this.sortParams.sortBy) this.sortParams.sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    else this.sortParams.sortBy = sortBy;
    let fielteredConfs: Array<configuration> = [];
    fielteredConfs = _.orderBy(this.configurations, [sortBy], [this.sortParams.sortOrder]);
    this.configurations = fielteredConfs;
  }
}
