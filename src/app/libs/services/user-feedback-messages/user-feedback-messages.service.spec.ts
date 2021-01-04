import { TestBed } from '@angular/core/testing';

import { UserFeedbackMessagesService } from './user-feedback-messages.service';

describe('UserFeedbackMessagesService', () => {
  let service: UserFeedbackMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFeedbackMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
