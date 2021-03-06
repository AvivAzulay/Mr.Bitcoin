import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { FilterBy } from 'src/app/models/filter.by';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contacts$: Observable<Contact[]>
  filterBy: FilterBy = { term: '' }

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contacts$ = this.contactService.contacts$
    this.contactService.loadContacts()
  }

  onSetFilter(filterBy: FilterBy) {
    this.filterBy = filterBy
    this.contactService.loadContacts(this.filterBy)
  }
}
