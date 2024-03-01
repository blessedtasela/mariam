import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  faqs = [
    {
      'id': 1,
      'question': 'HOW DOES IT WORK? WHAT EXACTLY DOES A VIRTUAL ASSISTANT DO?',
      'answer': 'Virtual Assistants assist you with your daily business tasks, whether they are ' +
        'administrative, creative, marketing, social media, or all of the above, to give you the time ' +
        'and freedom to do what you were created to do. They work remotely and can handle repetitive, ' +
        'mundane, or time-consuming tasks with ease and efficiency.',
    },
    {
      'id': 2,
      'question': 'WHICH TASK DO I PASS ALONG TO MY VIRTUAL ASSISTANT?',
      'answer': 'It is incredibly easy to assign a VA a task.  Things that would simplify your life and ' +
        'help your business run more smoothly! My guess is that you are wasting a lot of time on tasks that ' +
        'could be delegated to someone else, freeing up your time to focus on things that only you can do in ' +
        'business. \n' +
        'Make a list of things you hate doing, things that are time-wasters, tasks that are not within your special ' +
        'set of skills, gifts, or talents.',
    },
    {
      'id': 3,
      'question': 'HOW DOES THE VA MANAGE THEIR WORK HOURS?',
      'answer': 'Virtual assistants usually use a timer to track how much time they spend on each task throughout the ' +
        'day. Depending on how closely you want to track their hours, you can request a weekly report or an end-of-day report ' +
        'every day.  You should be able to see what tasks they completed each day and how much time they spent on them.  ' +
        'You get to decide how they spend their time, so sit down and think about your goals and how your VA can ' +
        'help you achieve them.',
    },
    {
      'id': 4,
      'question': 'HOW MUCH DOES IT COST TO HIRE AN ASSISTANT?',
      'answer': 'This varies greatly depending on who you hire, their experience, and the work they will do for you. When ' +
        'hiring a virtual assistant, you can expect to pay anywhere from $18 to $35+ per hour. Remember, you will ' +
        'get what you pay for. Experienced and skilled VAs typically charge higher rates than the average.',
    },
    {
      'id': 5,
      'question': 'HOW DO YOU FIND THE RIGHT VA?',
      'answer': 'This part is a lot harder than you might expect. You want to find someone with the right ' +
        'experience, who is proactive, and has a personality that meshes well with yours. ' +
        '\n Well then search no further you are in the right place.',
    },
  ]
}
