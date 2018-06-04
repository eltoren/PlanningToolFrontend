import {Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours} from 'date-fns';
import {Subject} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent} from 'angular-calendar';

import {Users} from '../models/users.model';
import {Projects} from '../models/projects.model';
import {ProjectsList} from '../models/ProjectsList.model'
import {OverviewService} from './Overview.service'

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};


@Component({
  selector: 'app-overview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css',
    '../main.css',
    '../reset.css'
  ]
})
export class OverviewComponent implements OnInit {

  ngOnInit(): void {
    this.getAllProjects();
    setTimeout(() => this.addexistingProjects(), 3000);

  }

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  currentUser: Users;

  view: string = 'month';

  viewDate: Date = new Date();

  project: Projects;
  projectList: ProjectsList = new ProjectsList();
  projectsArray = [];


  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({event}: {event: CalendarEvent}): void => {
        this.handleEvent('Edited', event);
        this.projectsService.addProjects(this.project).subscribe((data) => {});
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({event}: {event: CalendarEvent}): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: Array<CalendarEvent<{project: Projects, projectList: ProjectsList}>> = [



    //    {
    //      start: addHours(startOfDay(new Date()), 2),
    //      end: new Date(),
    //      title: 'A draggable and resizable event',
    //      color: colors.yellow,
    //      actions: this.actions,
    //      resizable: {
    //        beforeStart: true,
    //        afterEnd: true
    //      },
    //      draggable: true
    //    }
  ];
  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal, private router: Router, private projectsService: OverviewService) {this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  dayClicked({date, events}: {date: Date; events: CalendarEvent[]}): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = {event, action};
    this.modal.open(this.modalContent, {size: 'lg'});
  }

  addEvent(): void {
    this.project = new Projects;
    this.project.setProjectName('New Project');
    this.project.startDate = new Date();
    this.project.endDate = new Date();
    this.events.push({
      title: this.project.projectName,
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      actions: this.actions,

      meta: {
        project: this.project,
        projectList: this.getAllProjects()
      }
    });
    this.refresh.next();

  }

  getAllProjects(): ProjectsList {
    this.currentUser.projectsOfUser.forEach((projects) => {
      this.projectList.allProjects.push(projects);
    });
    return this.projectList
  }

  addexistingProjects(): void {
    this.projectList.allProjects.forEach((project) => {
      this.events.push({
        title: project.projectName,
        start: new Date(project.startDate),
        end: new Date(project.endDate),
        color: colors.red,
        draggable: true,
        actions: this.actions,

        meta: {
          project: project,
          projectList: this.projectList
        }
      });

      this.refresh.next();
    });
  }


}
