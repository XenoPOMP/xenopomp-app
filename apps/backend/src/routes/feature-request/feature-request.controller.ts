import { Controller } from '@nestjs/common';

import { FeatureRequest } from './decorators';
import { FeatureRequestService } from './feature-request.service';

@Controller('feature-request')
export class FeatureRequestController {
  constructor(private readonly featureRequestService: FeatureRequestService) {}

  @FeatureRequest('/edit-about-me', {
    editAboutMe: true,
  })
  async editAboutMe() {}
}
