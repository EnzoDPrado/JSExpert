{
  const loadInfos = {
    success: [
      {
        msisdn: '115511943216755',
      },
      {
        msisdn: '115511996416755',
      },
      {
        msisdn: '115511993216755',
      },
    ],
    errors: [
      {
        msisdn: '115511943216712',
      },
      {
        msisdn: '115511996416743',
      },
      {
        msisdn: '115511993216775',
      },
    ],
  };

  const msisdnsToLoad = [
    {
      msisdn: '115511943216755',
      name: 'Jonas 1',
    },
    {
      msisdn: '115511996416755',
      name: 'Jonas 2',
    },
    {
      msisdn: '115511993216755',
      name: 'Jonas 3',
    },
    {
      msisdn: '115511943216712',
      name: 'Jonas 4',
    },
    {
      msisdn: '115511996416743',
      name: 'Jonas 5',
    },
    {
      msisdn: '115511993216775',
      name: 'Jonas 6',
    },
  ];

  const msisdnsSucceedsSet = new Set(
    loadInfos.success.map(({ msisdn }) => msisdn)
  );
  
  const msisdnsSucceeds = msisdnsToLoad.filter(({ msisdn }) =>
    msisdnsSucceedsSet.has(msisdn)
  );

  console.log('method Set:', msisdnsSucceeds);
}

{
  const loadInfos = {
    success: [
      {
        msisdn: '115511943216755',
      },
      {
        msisdn: '115511996416755',
      },
      {
        msisdn: '115511993216755',
      },
    ],
    errors: [
      {
        msisdn: '115511943216712',
      },
      {
        msisdn: '115511996416743',
      },
      {
        msisdn: '115511993216775',
      },
    ],
  };

  const msisdnsToLoad = [
    {
      msisdn: '115511943216755',
      name: 'Jonas 1',
    },
    {
      msisdn: '115511996416755',
      name: 'Jonas 2',
    },
    {
      msisdn: '115511993216755',
      name: 'Jonas 3',
    },
    {
      msisdn: '115511943216712',
      name: 'Jonas 4',
    },
    {
      msisdn: '115511996416743',
      name: 'Jonas 5',
    },
    {
      msisdn: '115511993216775',
      name: 'Jonas 6',
    },
  ];

  const msisdnsSucceeds: any = [];
  for (const msisdn of msisdnsToLoad) {
    const msisdnSucceeds = loadInfos.success.find(
      (info) => info.msisdn === msisdn.msisdn
    );

    if (msisdnSucceeds) msisdnsSucceeds.push(msisdn);
  }

  console.log('method for:', msisdnsSucceeds);
}
