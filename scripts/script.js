const galleryItems = [
    {
      category: 'business',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20191122/5e9b350a19d8434693b648bcbef297b3.jpg',
      description: 'Blue Business Plan',
      plan: 'Free',
      likes: 123,
      views: 456,
      uploadDate: '2024-07-10'
    },
    {
      category: 'business',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20190816/1a66f5c50945430f9a75adbc5e849115.jpg',
      description: 'Business General Report',
      plan: 'Pro',
      likes: 789,
      views: 1011,
      uploadDate: '2024-07-05'
    },
    {
      category: 'marketing',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/1c2ec772-7da9-493e-9d24-f19b17fa45f8/thumbnails/616/tactical-business-marketing-plan-modern-simple-2-1-2fbbaaa8561a.webp',
      description: 'Tactical business marketing plan',
      plan: 'Free',
      likes: 218,
      views: 1215,
      uploadDate: '2024-07-25'
    },
    {
      category: 'business',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20211207/566a16faa05a41d38c6184ff7beb6f68.jpg',
      description: 'Colorful Business Work Plan',
      plan: 'Free',
      likes: 659,
      views: 1213,
      uploadDate: '2024-07-11'
    },
    {
      category: 'finance',
      format: 'presentation',
      imgSrc: 'https://imgscf.slidemembers.com/docs/1/1/821/financial_management_company_profile_template_design_820788.jpg',
      description: 'Financial Management',
      plan: 'Free',
      likes: 351,
      views: 387,
      uploadDate: '2024-07-14'
    },
    {
      category: 'business',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20211206/583e0e921d5b49d0860f32abd9ee3b34.jpg',
      description: 'Modern Business Report',
      plan: 'Pro',
      likes: 713,
      views: 608,
      uploadDate: '2024-07-09'
    },
    {
      category: 'business',
      format: 'presentation',
      imgSrc: 'https://cdn2.slidemodel.com/wp-content/uploads/90133-01-cryptocurrency-project-proposal-powerpoint-template-16x9-1.jpg',
      description: 'Cryptocurrency Project Proposal',
      plan: 'Free',
      likes: 325,
      views: 1402,
      uploadDate: '2024-07-13'
    },
    {
      category: 'business',
      format: 'presentation',
      imgSrc: 'https://cdn.slidemodel.com/wp-content/uploads/20846-01-business-partnership-powerpoint-template-1.jpg',
      description: 'Business Partnership',
      plan: 'Pro',
      likes: 518,
      views: 1645,
      uploadDate: '2024-06-14'
    },
    {
      category: 'business',
      format: 'presentation',
      imgSrc: 'https://cdn2.slidemodel.com/wp-content/uploads/60009-01-business-proposal-powerpoint-template-1.jpg',
      description: 'Business Proposal',
      plan: 'Free',
      likes: 642,
      views: 1164,
      uploadDate: '2024-06-09'
    },
    {
      category: 'business',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/ff4d1e90-0d63-47f2-80ee-cf5551472de2/thumbnails/600/blue-curve-meeting-agenda-blue-modern-simple-1-1-7887233bdab9.webp',
      description: 'Blue curve meeting agenda',
      plan: 'Free',
      likes: 787,
      views: 1416,
      uploadDate: '2024-05-18'
    },
    {
      category: 'business',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/a591d44c-e423-4952-a877-1615409febf4/thumbnails/600/business-sales-receipt-blue-modern-simple-1-1-d1774a624b14.webp',
      description: 'Business sales receipt',
      plan: 'Pro',
      likes: 974,
      views: 203,
      uploadDate: '2024-07-19'
    },
    {
      category: 'business',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/22e8c367-ccf7-4e6e-9846-05ae4a89af39/thumbnails/600/classic-meeting-minutes-null%253E-modern-simple-1-1-4d3aae01e398.webp',
      description: 'Classic meeting minutes',
      plan: 'Free',
      likes: 937,
      views: 1427,
      uploadDate: '2024-07-03'
    },
    {
      category: 'business',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/9b1a2d5c-81cf-45d9-b03a-e368b0c2ff8f/thumbnails/800/elevator-pitch-2-b5f6f2064e8c.webp',
      description: 'Elevator pitch',
      plan: 'Pro',
      likes: 264,
      views: 1056,
      uploadDate: '2024-07-21'
    },
    {
      category: 'business',
      format: 'writer',
      imgSrc: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fuploadedfiles%2Fuploads%2Fb070a56a-ffb2-4fef-b283-0631bcede756-professional-services-business-plan-blue-modern-simple-2-1.webp&w=1920&q=90',
      description: 'Professional services business plan',
      plan: 'Free',
      likes: 911,
      views: 629,
      uploadDate: '2024-04-22'
    },
    {
      category: 'business',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/e31c7649-84a7-47fb-97d0-39f05fcd215d/thumbnails/616/business-cards-%2528sales-stripes-design%252C-10-per-page%2529-gray-modern-simple-2-1-1c2916a1973e.webp',
      description: 'Business cards (sales stripes design, 10 per page)',
      plan: 'Pro',
      likes: 1,
      views: 1005,
      uploadDate: '2024-07-23'
    },
    {
      category: 'business',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/e22e6b47-cda8-4654-98c8-c21abc3d9ff1/thumbnails/616/business-plan-%2528design%2529-red-modern-simple-2-1-f4f9c351d9d1.webp',
      description: 'Business Plan (Design)',
      plan: 'Free',
      likes: 73,
      views: 1242,
      uploadDate: '2024-07-04'
    },
    {
      category: 'business',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/ae65f3b8-4857-4a11-a2cf-7371a5f923d9/thumbnails/600/business-financial-plan-blue-modern-bold-1-1-fe0a768c30e7.webp',
      description: 'Business Financial Plan',
      plan: 'Free',
      likes: 964,
      views: 159,
      uploadDate: '2024-07-25'
    },
    {
      category: 'business',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/8c4be8ed-3202-4365-acfd-63ea7c279aeb/thumbnails/600/social-media-engagement-data-orange-modern-simple-1-1-f1ceaff3866e.webp',
      description: 'Social media engagement data',
      plan: 'Pro',
      likes: 986,
      views: 664,
      uploadDate: '2024-03-26'
    },
    {
      category: 'business',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/1a6c8d9a-c5d5-4d4c-bd45-a4b913d3334c/thumbnails/1034/profit-and-loss-statement-%2528with-logo%2529-blue-modern-simple-2-1-d614bbdd4be5.webp',
      description: 'Profit and loss statement (with logo)',
      plan: 'Free',
      likes: 455,
      views: 1638,
      uploadDate: '2024-07-27'
    },
    {
      category: 'business',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/94c0fff6-ff52-412a-89a1-a09af97952bf/thumbnails/600/quarterly-sale-report-brown-modern-simple-1-1-d05e98395914.webp',
      description: 'Quarterly sale report',
      plan: 'Pro',
      likes: 117,
      views: 1678,
      uploadDate: '2024-07-28'
    },
    {
      category: 'business',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/8c1f0018-6c37-4fc5-9d36-08ed3e806005/thumbnails/1034/sales-forecast-tracker-small-business-red-modern-simple-2-1-4c6b646886f5.webp',
      description: 'Sales forecast tracker small business',
      plan: 'Free',
      likes: 216,
      views: 1892,
      uploadDate: '2024-07-08'
    },
    {
      category: 'business',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/94c0fff6-ff52-412a-89a1-a09af97952bf/thumbnails/600/quarterly-sale-report-brown-modern-simple-1-1-d05e98395914.webp',
      description: 'Quarterly sale report',
      plan: 'Pro',
      likes: 471,
      views: 739,
      uploadDate: '2024-07-30'
    },
    {
      category: 'business',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/0ed682bd-0050-4b54-8b50-e7842583290a/thumbnails/600/basic-business-invoice-blue-modern-simple-1-1-382fbfe69a88.webp',
      description: 'Basic business invoice',
      plan: 'Free',
      likes: 820,
      views: 129,
      uploadDate: '2024-07-31'
    },
    {
      category: 'marketing',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20211207/144d93802cad49289610a99e79c9ef18.jpg',
      description: 'Product Marketing Report',
      plan: 'Free',
      likes: 123,
      views: 456,
      uploadDate: '2024-07-12'
    },
    {
      category: 'marketing',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20230627/992252c5e9314bb98f6ba47abf376b34.jpg',
      description: 'Restaurant Marketing Plan',
      plan: 'Pro',
      likes: 789,
      views: 1011,
      uploadDate: '2024-07-07'
    },
    {
      category: 'marketing',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20230727/4e080baf275a4fd3ad3d5da613bf4722.jpg',
      description: 'Monthly Marketing Report',
      plan: 'Free',
      likes: 253,
      views: 977,
      uploadDate: '2024-07-02'
    },
    {
      category: 'marketing',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20191021/5cb5c77b550143a9b99dfd1856eb9e07.jpg',
      description: 'Modern Marketing Analysis',
      plan: 'Pro',
      likes: 747,
      views: 657,
      uploadDate: '2024-07-09'
    },
    {
      category: 'marketing',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20230727/64a4fea269564b0e88de8b9cbe967bfb.jpg',
      description: 'Marketing Research',
      plan: 'Free',
      likes: 545,
      views: 671,
      uploadDate: '2024-07-01'
    },
    {
      category: 'marketing',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20230627/3e8323d261894aaa9812c51c3cdbfd32.jpg',
      description: 'Marketing Plan2',
      plan: 'Pro',
      likes: 482,
      views: 1566,
      uploadDate: '2024-07-05'
    },
    {
      category: 'marketing',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20190816/b298069cdcab42a7a3de51322ae81a27.jpg',
      description: 'Promotion Marketing Presentation',
      plan: 'Free',
      likes: 833,
      views: 1474,
      uploadDate: '2024-07-16'
    },
    {
      category: 'marketing',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/2f890747-6bef-4925-841c-82b764415856/thumbnails/616/triangles-agenda-blue-modern-geometric-%2526-linear-2-1-f48b9d8cedff.webp',
      description: 'Triangles agenda',
      plan: 'Free',
      likes: 627,
      views: 1415,
      uploadDate: '2024-07-09'
    },
    {
      category: 'marketing',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/15d030a7-4d0a-4c1c-8a3e-3a7590a124ce/thumbnails/616/business-report-%2528professional-design%2529-red-modern-simple-2-1-3f81fc4b8f8a.webp',
      description: 'Business report (professional design)',
      plan: 'Pro',
      likes: 275,
      views: 872,
      uploadDate: '2024-07-20'
    },
    {
      category: 'marketing',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/18738449-6fb4-4a4f-86eb-4fd0af1608f5/thumbnails/600/target-audience-profiling-plan-blue-modern-simple-1-1-b782362fc263.webp',
      description: 'Target audience profiling plan',
      plan: 'Free',
      likes: 113,
      views: 437,
      uploadDate: '2024-07-11'
    },
    {
      category: 'marketing',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/af9c162d-a28d-4c0b-bf4c-998d0ac9e3e2/thumbnails/616/open-house-flyer-yellow-modern-simple-2-1-dd37bb37a7ee.webp',
      description: 'Open house flyer',
      plan: 'Pro',
      likes: 128,
      views: 1418,
      uploadDate: '2024-07-22'
    },
    {
      category: 'marketing',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/d68df550-2dce-4601-ac59-22b431043ee8/thumbnails/616/social-media-marketing-resume-blue-modern-simple-2-1-94cd8ff776a7.webp',
      description: 'Social media marketing resume',
      plan: 'Free',
      likes: 743,
      views: 268,
      uploadDate: '2024-07-10'
    },
    {
      category: 'marketing',
      format: 'writer',
      imgSrc: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fuploadedfiles%2Fuploads%2F8de15e0f-8135-414a-85c7-998d0efd7a32-travel-brochure-purple-modern-simple-2-1.webp&w=1920&q=90',
      description: 'Travel brochure',
      plan: 'Pro',
      likes: 305,
      views: 27,
      uploadDate: '2024-07-23'
    },
    {
      category: 'marketing',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/0324ef03-b159-43c2-8a21-81728c750a65/thumbnails/600/project-plan-for-law-firms-modern-simple-1-1-fe766f79615f.webp',
      description: 'Project plan for law firms',
      plan: 'Free',
      likes: 802,
      views: 1446,
      uploadDate: '2024-07-16'
    },
    {
      category: 'marketing',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/8c4be8ed-3202-4365-acfd-63ea7c279aeb/thumbnails/600/social-media-engagement-data-orange-modern-simple-1-1-f1ceaff3866e.webp',
      description: 'Social media engagement data',
      plan: 'Pro',
      likes: 867,
      views: 679,
      uploadDate: '2024-07-27'
    },
    {
      category: 'marketing',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/1a6c8d9a-c5d5-4d4c-bd45-a4b913d3334c/thumbnails/1034/profit-and-loss-statement-%2528with-logo%2529-blue-modern-simple-2-1-d614bbdd4be5.webp',
      description: 'Profit and loss statement (with logo)',
      plan: 'Free',
      likes: 249,
      views: 1160,
      uploadDate: '2024-07-28'
    },
    {
      category: 'marketing',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/94c0fff6-ff52-412a-89a1-a09af97952bf/thumbnails/600/quarterly-sale-report-brown-modern-simple-1-1-d05e98395914.webp',
      description: 'Quarterly sale report',
      plan: 'Pro',
      likes: 701,
      views: 1326,
      uploadDate: '2024-07-19'
    },
    {
      category: 'marketing',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/b86f671c-8d23-4af3-84ee-5d1d9fd9b07f/thumbnails/600/subscription-and-membership-tracker-orange-modern-simple-1-1-66d511b362cd.webp',
      description: 'Subscription and membership tracker',
      plan: 'Free',
      likes: 763,
      views: 1127,
      uploadDate: '2024-07-08'
    },
    {
      category: 'marketing',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/03a9bc66-4270-4fc3-9297-afef7e18254d/thumbnails/600/online-sales-tracker-modern-simple-1-1-823efbb4de17.webp',
      description: 'Online sales tracker',
      plan: 'Pro',
      likes: 588,
      views: 808,
      uploadDate: '2024-07-01'
    },
    {
      category: 'marketing',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/6667de34-e27d-4c5e-8a86-151e798da560/thumbnails/600/channel-marketing-budget-blue-modern-simple-1-1-7bbb9596b5d8.webp',
      description: 'Channel marketing budget',
      plan: 'Free',
      likes: 115,
      views: 164,
      uploadDate: '2024-07-02'
    },
    {
      category: 'education',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20211222/a0c140a96edd4baea71904a98f5ff83f.jpg',
      description: 'Blackboard Style Teaching Coursewar',
      plan: 'Free',
      likes: 123,
      views: 456,
      uploadDate: '2024-07-14'
    },
    {
      category: 'education',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20211229/5aad97c8ac644224b782be010d506b1d.jpg',
      description: 'Blue Stationery Teaching Report',
      plan: 'Pro',
      likes: 789,
      views: 1011,
      uploadDate: '2024-07-09'
    },
    {
      category: 'education',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20191231/d87b1b78393e41b1b632b0b9b1cb16ef.jpg',
      description: 'Literature Education Presentation',
      plan: 'Free',
      likes: 607,
      views: 1928,
      uploadDate: '2024-07-03'
    },
    {
      category: 'education',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20191028/9b93c09c9915471db6482bd07ac446b6.jpg',
      description: 'Cute Handwriting Education Presentation',
      plan: 'Pro',
      likes: 900,
      views: 1438,
      uploadDate: '2024-07-04'
    },
    {
      category: 'education',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20190828/3b8673497b754cdd8c9530cc80fd2452.jpg',
      description: 'Flat Cartoon Education Presentation',
      plan: 'Free',
      likes: 694,
      views: 882,
      uploadDate: '2024-07-05'
    },
    {
      category: 'education',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20190819/84a0a83e7b7e4d83bed14b6dd130709a.jpg',
      description: 'Abstract Colorful Education Presentation',
      plan: 'Pro',
      likes: 222,
      views: 644,
      uploadDate: '2024-07-06'
    },
    {
      category: 'education',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20230627/425ea3d12a4f48058a5b72739c7a8658.jpg',
      description: 'Minimal Education Template',
      plan: 'Free',
      likes: 683,
      views: 1955,
      uploadDate: '2024-07-07'
    },
    {
      category: 'education',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/c751c138-4311-4e62-bc20-dea266097e37/thumbnails/600/grading-rubric-gray-modern-simple-1-1-e480454a4ee1.webp',
      description: 'Grading rubric',
      plan: 'Free',
      likes: 324,
      views: 88,
      uploadDate: '2024-07-10'
    },
    {
      category: 'education',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/ad840374-9d16-4b40-9c43-2a66d524d54d/thumbnails/616/science-fair-planner-blue-modern-simple-2-1-5a4566d8dd5a.webp',
      description: 'Science fair planner',
      plan: 'Pro',
      likes: 212,
      views: 1791,
      uploadDate: '2024-07-11'
    },
    {
      category: 'education',
      format: 'writer',
      imgSrc: 'https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fuploadedfiles%2Fuploads%2F40ebf90e-4f75-41c7-b71a-d154929301f9-lesson-plan-calendar-blue-modern-simple-2-1.webp&w=1920&q=90',
      description: 'Lesson plan calendar',
      plan: 'Free',
      likes: 398,
      views: 469,
      uploadDate: '2024-07-12'
    },
    {
      category: 'education',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/dd03fa25-1496-4a8b-b1e9-cb970ec7b089/thumbnails/600/exit-tickets-blue-modern-simple-1-1-0c847ace49aa.webp',
      description: 'Exit tickets',
      plan: 'Pro',
      likes: 362,
      views: 1375,
      uploadDate: '2024-07-13'
    },
    {
      category: 'education',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/f344f154-841e-4811-bd99-a9d55dc958a2/thumbnails/600/weekly-assignment-calendar-modern-simple-1-1-f812c8ce9fb2.webp',
      description: 'Weekly assignment calendar',
      plan: 'Free',
      likes: 828,
      views: 1621,
      uploadDate: '2024-07-14'
    },
    {
      category: 'education',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/43c7ebfd-c25c-4805-b8b7-b27d9466c574/thumbnails/600/education-minutes-blue-modern-color-block-1-1-6a7a4adc0663.webp',
      description: 'Education minutes',
      plan: 'Pro',
      likes: 306,
      views: 1014,
      uploadDate: '2024-07-15'
    },
    {
      category: 'education',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/d3fc4f4d-8b64-400a-b29d-f69fe66d4e9f/thumbnails/600/pta-agenda-yellow-modern-simple-1-1-07b721c2ab53.webp',
      description: 'PTA agenda',
      plan: 'Free',
      likes: 98,
      views: 183,
      uploadDate: '2024-07-16'
    },
    {
      category: 'education',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/3445dcd8-2047-4602-8056-ea5c30d95b19/thumbnails/1042/assignment-schedule-gray-modern-simple-2-1-ba88cc16c1f1.webp',
      description: 'Assignment schedule',
      plan: 'Free',
      likes: 235,
      views: 620,
      uploadDate: '2024-07-17'
    },
    {
      category: 'education',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/5909fd85-7da1-4e0d-bceb-2f64ada45741/thumbnails/600/brainstorming-worksheet-black-modern-simple-1-1-719d8059776d.webp',
      description: 'Brainstorming worksheet',
      plan: 'Pro',
      likes: 437,
      views: 1486,
      uploadDate: '2024-07-18'
    },
    {
      category: 'education',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/1cbd5c5c-4e0d-41ba-981f-5d9dc99ffbf6/thumbnails/600/monthly-college-budget-blue-modern-simple-1-1-0bc690367be6.webp',
      description: 'Monthly college budget',
      plan: 'Free',
      likes: 766,
      views: 1992,
      uploadDate: '2024-07-19'
    },
    {
      category: 'education',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/f5e29f68-524f-4e52-9b09-e68871fc720b/thumbnails/1034/student-calendar-%2528mon%2529-blue-modern-simple-2-1-0f72ea4defb5.webp',
      description: 'Student calendar',
      plan: 'Pro',
      likes: 640,
      views: 251,
      uploadDate: '2024-07-10'
    },
    {
      category: 'education',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/68fc0e53-b09e-4f0c-92f6-c5cb2c657bc0/thumbnails/1034/class-attendance-list-modern-simple-2-1-631beaeb4f34.webp',
      description: 'Class attendance list',
      plan: 'Free',
      likes: 297,
      views: 1876,
      uploadDate: '2024-07-11'
    },
    {
      category: 'education',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/48f98fd1-a81d-4d08-9d99-6cb0fa8c5b52/thumbnails/600/student-schedule-brown-modern-simple-1-1-e2631966b286.webp',
      description: 'Student schedule',
      plan: 'Pro',
      likes: 220,
      views: 433,
      uploadDate: '2024-07-12'
    },
    {
      category: 'education',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/4b371a73-0346-4f26-a194-75ec59ca6c0e/thumbnails/600/weekly-lesson-planner-modern-simple-1-1-765e0b796654.webp',
      description: 'Weekly lesson planner',
      plan: 'Free',
      likes: 305,
      views: 1431,
      uploadDate: '2024-07-13'
    },
    {
      category: 'personal',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20190131/3f06b158aa8a4b28b5c2691473b0f355.jpg',
      description: 'Weekly Planner Curriculum',
      plan: 'Free',
      likes: 123,
      views: 456,
      uploadDate: '2024-07-16'
    },
    {
      category: 'personal',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20190821/12657c3dc2ea425fb5884e7221dff1c4.jpg',
      description: 'IOS Fashion Personal Profile Resume',
      plan: 'Pro',
      likes: 789,
      views: 1011,
      uploadDate: '2024-07-11'
    },
    {
      category: 'personal',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20211203/a6e8f02b4e3440099e876e26f94ec49b.jpg',
      description: 'Red Modern Personal Annual Report',
      plan: 'Free',
      likes: 351,
      views: 387,
      uploadDate: '2024-07-14'
    },
    {
      category: 'personal',
      format: 'presentation',
      imgSrc: 'https://newdocer.cache.wpscdn.com/photo/20230627/36e1222d07c84cc0a1649d4d084e5d31.jpg',
      description: 'Personal Photo Album',
      plan: 'Pro',
      likes: 731,
      views: 1647,
      uploadDate: '2024-07-15'
    },
    {
      category: 'personal',
      format: 'presentation',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/7c50e4f9-66de-47f5-8c43-e5f584995373/thumbnails/600/camping-checklist-green-modern-simple-1-1-c1c22eb09c6b.webp',
      description: 'Personal trip planner',
      plan: 'Free',
      likes: 927,
      views: 465,
      uploadDate: '2024-07-16'
    },
    {
      category: 'personal',
      format: 'presentation',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/c35f81f5-3060-43ba-8df6-d76188a29f26/thumbnails/600/navigating-emotions-with-the-feelings-monster-blue-whimsical-color-block-1-1-bd16f7f0ab1d.webp',
      description: 'Navigating emotions with the Feelings Monster',
      plan: 'Pro',
      likes: 526,
      views: 216,
      uploadDate: '2024-07-17'
    },
    {
      category: 'personal',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/6d790eed-b779-44ec-a0d9-9a02e47800c8/thumbnails/600/monthly-menu-planner-modern-simple-1-1-ce1bb24843f3.webp',
      description: 'Monthly menu planner',
      plan: 'Free',
      likes: 623,
      views: 558,
      uploadDate: '2024-05-11'
    },
    {
      category: 'personal',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/4f133cc2-2483-4516-a9ae-47904ba6d876/thumbnails/600/impact-cover-letter-green-modern-simple-1-1-57a618ebe816.webp',
      description: 'Impact cover letter',
      plan: 'Pro',
      likes: 791,
      views: 1229,
      uploadDate: '2024-05-12'
    },
    {
      category: 'personal',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/5c5f5695-f69b-4851-9900-882616a0aa93/thumbnails/616/elegant-florist-resume-green-organic-simple-2-1-d9c6496104aa.webp',
      description: 'Elegant florist resume',
      plan: 'Free',
      likes: 93,
      views: 756,
      uploadDate: '2024-05-13'
    },
    {
      category: 'personal',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/5c29b4ca-a15e-4da8-80e5-c81924fbab2e/thumbnails/600/personal-journal-grey-organic-boho-1-1-fd441d706155.webp',
      description: 'Personal journal',
      plan: 'Pro',
      likes: 261,
      views: 1837,
      uploadDate: '2024-05-14'
    },
    {
      category: 'personal',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/7af668a8-d9d4-4a54-989e-422a9b87280f/thumbnails/616/basic-sales-resume-white-modern-simple-2-1-a604636a88cd.webp',
      description: 'Basic sales resume',
      plan: 'Free',
      likes: 458,
      views: 1111,
      uploadDate: '2024-05-15'
    },
    {
      category: 'personal',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/bd69e57c-dbd2-4fd1-bffa-45b1c8abf456/thumbnails/616/minimalist-trip-itinerary-null-modern-simple-2-1-85b190632283.webp',
      description: 'Minimalist trip itinerary',
      plan: 'Pro',
      likes: 684,
      views: 1344,
      uploadDate: '2024-05-16'
    },
    {
      category: 'personal',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/3051ca80-03ce-435f-8e28-45e6f7b6c077/thumbnails/600/family-chore-chart-blue-modern-simple-1-1-8ef6a21c87ba.webp',
      description: 'Family chore chart',
      plan: 'Free',
      likes: 878,
      views: 1486,
      uploadDate: '2024-05-17'
    },
    {
      category: 'personal',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/de27afd1-55a2-404a-af1b-0e4de8fefd24/thumbnails/1034/weekly-task-schedule-blue-vintage-retro-2-1-023007c79a43.webp',
      description: 'Weekly task schedule',
      plan: 'Free',
      likes: 781,
      views: 543,
      uploadDate: '2024-05-18'
    },
    {
      category: 'personal',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/98eb7d9a-1a94-4de8-b2f8-ba215dd80ef7/thumbnails/600/exercise-planner-blue-modern-simple-1-1-62faa49edd87.webp',
      description: 'Exercise planner',
      plan: 'Pro',
      likes: 239,
      views: 303,
      uploadDate: '2024-05-19'
    },
    {
      category: 'personal',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/67ec3f46-76fe-4128-9651-c7f27ee0570e/thumbnails/600/fitness-plan-purple-modern-simple-1-1-b78f63b0c68b.webp',
      description: 'Fitness plan',
      plan: 'Free',
      likes: 62,
      views: 1957,
      uploadDate: '2024-06-10'
    },
    {
      category: 'personal',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/8b2318c9-28db-4b66-b623-717334b2c58e/thumbnails/600/grocery-list-brown-modern-simple-1-1-67958bf1e756.webp',
      description: 'Grocery list',
      plan: 'Pro',
      likes: 587,
      views: 800,
      uploadDate: '2024-06-11'
    },
    {
      category: 'personal',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/6521f005-9654-4af8-af47-7ebee8f8c20b/thumbnails/600/social-media-content-calendar-blue-modern-simple-1-1-55560a558403.webp',
      description: 'Social media content calendar',
      plan: 'Free',
      likes: 598,
      views: 792,
      uploadDate: '2024-06-12'
    },
    {
      category: 'personal',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/2f29bdf2-fcff-4e7a-a9de-9459eb8f1b98/thumbnails/600/family-travel-planner-green-modern-simple-1-1-e9b0446fef05.webp',
      description: 'Family travel planner',
      plan: 'Pro',
      likes: 278,
      views: 1180,
      uploadDate: '2024-06-13'
    },
    {
      category: 'personal',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/e81583ee-cdce-4906-bbd6-3102e3a6d49b/thumbnails/600/my-family%2527s-health-record-blue-modern-simple-1-1-78dad44c9fe4.webp',
      description: 'My familys health record',
      plan: 'Free',
      likes: 389,
      views: 1664,
      uploadDate: '2024-06-14'
    },
    {
      category: 'finance',
      format: 'presentation',
      imgSrc: 'https://imgscf.slidemembers.com/docs/1/1/692/financial_pitch_deck_powerpoint_theme_691120.jpg',
      description: 'Financial Pitch Deck',
      plan: 'Free',
      likes: 123,
      views: 456,
      uploadDate: '2024-07-16'
    },
    {
      category: 'finance',
      format: 'presentation',
      imgSrc: 'https://imgscf.slidemembers.com/docs/1/1/896/economy_elegant_powerpoint_templates_895575.jpg',
      description: 'Economy elegant',
      plan: 'Pro',
      likes: 789,
      views: 1011,
      uploadDate: '2024-07-11'
    },
    {
      category: 'finance',
      format: 'presentation',
      imgSrc: 'https://imgscf.slidemembers.com/docs/1/1/290/finance_ppt_presentation_289500.jpg',
      description: 'Finance',
      plan: 'Pro',
      likes: 731,
      views: 1647,
      uploadDate: '2024-07-15'
    },
    {
      category: 'finance',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/8497d4a5-571e-45d6-b1a4-18eeeccaa2bc/thumbnails/600/service-invoice-blue-modern-simple-1-1-94208a9485fe.webp',
      description: 'Service invoice',
      plan: 'Free',
      likes: 623,
      views: 558,
      uploadDate: '2024-05-11'
    },
    {
      category: 'finance',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/144eba9e-9a37-46a7-bfe6-bfdaa15437b0/thumbnails/600/retro-sales-receipt-yellow-modern-bold-1-1-321dcaabf057.webp',
      description: 'Retro sales receipt',
      plan: 'Pro',
      likes: 791,
      views: 1229,
      uploadDate: '2024-05-12'
    },
    {
      category: 'finance',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/108d26ba-c2ce-4d18-a644-5c18ff4f7ef3/thumbnails/600/basic-invoice-with-sales-tax-yellow-modern-simple-1-1-8d23c65b740a.webp',
      description: 'Basic invoice with sales tax',
      plan: 'Free',
      likes: 93,
      views: 756,
      uploadDate: '2024-05-13'
    },
    {
      category: 'finance',
      format: 'writer',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/2228e0d1-b139-4b3c-89ef-4892b23b5e90/thumbnails/600/financial-meeting-agenda-blue-modern-simple-1-1-9563e616da08.webp',
      description: 'Financial meeting agenda',
      plan: 'Pro',
      likes: 261,
      views: 1837,
      uploadDate: '2024-05-14'
    },
    {
      category: 'finance',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/1a6c8d9a-c5d5-4d4c-bd45-a4b913d3334c/thumbnails/1034/profit-and-loss-statement-%2528with-logo%2529-blue-modern-simple-2-1-d614bbdd4be5.webp',
      description: 'Profit and loss statement',
      plan: 'Free',
      likes: 781,
      views: 543,
      uploadDate: '2024-05-18'
    },
    {
      category: 'finance',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/82757043-069e-479d-afa9-5db77eb9feda/thumbnails/600/monthly-bank-reconciliation-green-modern-simple-1-1-b9bcfe9efa3e.webp',
      description: 'Monthly bank reconciliation',
      plan: 'Pro',
      likes: 239,
      views: 303,
      uploadDate: '2024-05-19'
    },
    {
      category: 'finance',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/9d4519ee-e43c-4454-83b0-23008c43ede9/thumbnails/600/annuity-investment-calculator-green-modern-simple-1-1-2e2e52f6ed12.webp',
      description: 'Annuity investment calculator',
      plan: 'Free',
      likes: 62,
      views: 1957,
      uploadDate: '2024-06-10'
    },
    {
      category: 'finance',
      format: 'spreadsheet',
      imgSrc: 'https://cdn.create.microsoft.com/catalog-assets/en-us/ded4a912-7d41-425f-848d-90bbe02205b4/thumbnails/600/mortgage-payment-calculator-purple-modern-simple-1-1-444a0fdb6b6c.webp',
      description: 'Mortgage payment calculator',
      plan: 'Pro',
      likes: 587,
      views: 800,
      uploadDate: '2024-06-11'
    }
  ]
  
  
          function renderGallery(items) {
              const galleryContainer = document.querySelector('.gallery');
              galleryContainer.innerHTML = '';
              items.forEach(item => {
                  const planClass = item.plan === 'Free' ? 'free-plan' : 'pro-plan';
                  const galleryItem = `
                  <a href="file.html" target="_blank">
                      <div class="gallery-item ${item.category} ${item.format}">
                          <img src="${item.imgSrc}" alt="${item.description}">
                          <div class="overlay">
                              <div class="icons">
                                  <button class="like-icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: 2.5vh;">
                                          <path fill="#f40b0b" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/>
                                      </svg>
                                  </button>
                                  <button class="save-icon" onclick="downloadPPT()">
                                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 2.5vh;">
                                          <path d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z" fill="#283593"></path>
                                          <path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6516 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15V15.0549C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15V15.0549C20.2499 16.3226 20.2498 17.3638 20.1353 18.1296C20.0144 18.9681 19.7231 19.6666 19.2863 20.0923C18.8664 20.4956 18.1651 20.7432 17.2107 20.8235C16.3632 20.8957 15.3927 20.9406 14.3927 20.9406H9.60733C8.60731 20.9406 7.63681 20.8957 6.78933 20.8235C5.8349 20.7432 5.13362 20.4956 4.71367 20.0923C4.27684 19.6666 3.98555 18.9681 3.8646 18.1296C3.75009 17.3638 3.75006 16.3226 3.75 15.0549V15Z" fill="#283593"></path>
                                      </svg>
                                  </button>
                              </div>
                          </div>
                          <div class="description">
                              <p>${item.description}</p>
                              <span class="indicator ${planClass}">${item.plan}</span>
                              <div class="stats">
                                  <span class="likes"><i class="fa fa-heart"></i> ${item.likes}</span>
                                  <span class="views"><i class="fa fa-eye"></i> ${item.views}</span>
                              </div>
                          </div>
                      </div>
                    </a>
                  `;
                  galleryContainer.innerHTML += galleryItem;
              });
          }
  
          function filterGallery() {
              const category = document.querySelector('.category-checked').innerText.toLowerCase();
              const format = document.querySelector('input[name="format"]:checked').value;
              var searchKeyword = document.querySelector('input[name="search"]').value.toLowerCase();
              const sortType = document.querySelector('input[name="sortType"]:checked').value;
  
              searchKeyword = searchKeyword.toLowerCase();
              searchKeyword = searchKeyword.replace("ppt", "presentation");
              searchKeyword = searchKeyword.replace("xl", "spreadsheet");
              searchKeyword = searchKeyword.replace("excel", "spreadsheet");
              searchKeyword = searchKeyword.replace("word", "writer");
              var filteredItems = galleryItems.filter(item => {
                  const matchesCategory = category === 'all' || item.category.toLowerCase() === category;
                  const matchesFormat = format === 'all' || item.format.toLowerCase().includes(format);
                  const matchesKeyword = item.description.toLowerCase().includes(searchKeyword) || item.category === searchKeyword || item.format === searchKeyword;
                  return matchesCategory && matchesFormat && matchesKeyword;
              });
  
              if (sortType === 'popularity') {
                  filteredItems = filteredItems.sort((a, b) => b.views - a.views);
              } else if (sortType === 'newest') {
                  filteredItems = filteredItems.sort((a, b) => (new Date(b.uploadDate)).getTime() - (new Date(a.uploadDate)).getTime());
              } else if (sortType === 'oldest') {
                  filteredItems = filteredItems.sort((a, b) => (new Date(a.uploadDate)).getTime() - (new Date(b.uploadDate)).getTime());
              }
  
              renderGallery(filteredItems);
          }
  
          document.addEventListener('DOMContentLoaded', function () {
              document.querySelectorAll('.category').forEach(button => {
                  button.addEventListener('click', function () {
                      document.querySelectorAll('.category').forEach(btn => btn.classList.remove('category-checked'));
                      this.classList.add('category-checked');
                      filterGallery();
              
                  });
              });
  
              document.querySelectorAll('form[name="formA"] input[name="format"]').forEach(radio => {
                  radio.addEventListener('change', filterGallery);
              });
  
              document.querySelectorAll('input[name="format"]').forEach(radio => {
                  radio.addEventListener('change', filterGallery);
              });
  
              renderGallery(galleryItems);
          });
  
  
          $(document).ready(function(){
              $('.filterSubmit').click(function(e) {
                  filterGallery();
              });
  
              $('.dropdown-el').click(function(e) {
                  e.preventDefault();
                  e.stopPropagation();
                  $(this).toggleClass('expanded');
                  $('#'+$(e.target).attr('for')).prop('checked',true);
              });
              
              $(document).click(function() {
                  $('.dropdown-el').removeClass('expanded');
              });
  
              $('input[type=radio]').click(function(){
                  alert(this.value);
              });
          });

          function downloadPPT() {
            const pptUrl = 'assets/presentation.pptx'; // Replace with actual PPT file URL
            const link = document.createElement('a');
            link.href = pptUrl;
            link.download = 'presentation.pptx';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }