const sampleWhaleSightingsData = [
  [
    {
      "species": "orca",
      "quantity": "5",
      "sighted_at": "2017-11-09T18:11:00Z",
      "orca_type": "unknown",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "harbor porpoise",
      "quantity": "20",
      "sighted_at": "2017-10-01T00:38:00Z",
      "orca_type": "unknown",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "humpback",
      "quantity": "1",
      "sighted_at": "2017-09-03T00:45:00Z",
      "orca_type": "unknown",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "humpback",
      "quantity": "1",
      "sighted_at": "2017-07-29T21:55:00Z",
      "orca_type": "unknown",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "humpback",
      "quantity": "1",
      "sighted_at": "2017-07-16T02:39:00Z",
      "orca_type": "unknown",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": "14",
      "sighted_at": "2017-06-25T14:02:00Z",
      "orca_type": "unknown",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "gray whale",
      "quantity": "1 ",
      "sighted_at": "2017-06-14T13:30:00Z",
      "orca_type": "unknown",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-11-28T20:30:00Z",
      "orca_type": "offshore",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-11-14T20:28:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-11-14T18:09:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-26T22:08:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-26T16:36:00Z",
      "orca_type": "offshore",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-24T22:40:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-24T19:43:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-16T19:00:00Z",
      "orca_type": "offshore",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-12T21:30:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-10T21:36:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-10T21:26:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-10T21:16:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-10T21:06:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-10T21:06:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-09T18:15:00Z",
      "orca_type": "offshore",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-08T00:47:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-08T00:37:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-08T00:27:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-08T00:16:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-08T00:06:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-07T23:56:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-07T23:46:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-07T23:36:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-07T23:27:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T21:50:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T21:41:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T21:40:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T21:31:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T21:30:00Z",
      "orca_type": "offshore",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T21:21:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T14:30:00Z",
      "orca_type": "offshore",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-03T17:11:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-03T16:40:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-29T22:48:00Z",
      "orca_type": "offshore",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T22:17:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T22:07:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T22:00:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T21:47:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T21:37:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T21:27:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T21:20:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T21:17:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-26T21:48:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-26T21:38:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-26T21:28:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-26T21:18:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-26T21:09:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-26T21:00:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T22:28:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T21:28:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T20:57:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T20:30:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T19:55:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T18:29:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T18:19:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T18:09:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T17:59:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T17:50:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T17:44:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T22:56:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T22:23:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T21:56:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T21:25:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T20:55:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T20:24:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T19:54:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T19:27:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T18:57:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T23:30:00Z",
      "orca_type": "offshore",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T22:40:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T22:30:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T22:20:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T22:10:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T22:00:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T21:50:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T21:40:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T21:30:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T21:20:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T21:10:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T21:00:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T20:51:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T18:51:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T18:41:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T18:31:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T18:30:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T23:25:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T23:20:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T23:15:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T23:06:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T22:55:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T22:45:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T22:35:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T22:25:00Z",
      "orca_type": "southern resident",
      "beachId": 1,
      "beachName": "Pelican State Beach"
    }
  ],
  [
    {
      "species": "orca",
      "quantity": "5",
      "sighted_at": "2017-11-09T18:11:00Z",
      "orca_type": "unknown",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "harbor porpoise",
      "quantity": "20",
      "sighted_at": "2017-10-01T00:38:00Z",
      "orca_type": "unknown",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "humpback",
      "quantity": "1",
      "sighted_at": "2017-09-03T00:45:00Z",
      "orca_type": "unknown",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "humpback",
      "quantity": "1",
      "sighted_at": "2017-07-29T21:55:00Z",
      "orca_type": "unknown",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "humpback",
      "quantity": "1",
      "sighted_at": "2017-07-16T02:39:00Z",
      "orca_type": "unknown",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": "14",
      "sighted_at": "2017-06-25T14:02:00Z",
      "orca_type": "unknown",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "gray whale",
      "quantity": "1 ",
      "sighted_at": "2017-06-14T13:30:00Z",
      "orca_type": "unknown",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-11-28T20:30:00Z",
      "orca_type": "offshore",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-11-14T20:28:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-11-14T18:09:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-26T22:08:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-26T16:36:00Z",
      "orca_type": "offshore",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-24T22:40:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-24T19:43:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-16T19:00:00Z",
      "orca_type": "offshore",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-12T21:30:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-10T21:36:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-10T21:26:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-10T21:16:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-10T21:06:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-10T21:06:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-09T18:15:00Z",
      "orca_type": "offshore",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-08T00:47:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-08T00:37:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-08T00:27:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-08T00:16:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-08T00:06:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-07T23:56:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-07T23:46:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-07T23:36:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-07T23:27:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T21:50:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T21:41:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T21:40:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T21:31:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T21:30:00Z",
      "orca_type": "offshore",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T21:21:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T14:30:00Z",
      "orca_type": "offshore",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-03T17:11:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-03T16:40:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-29T22:48:00Z",
      "orca_type": "offshore",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T22:17:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T22:07:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T22:00:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T21:47:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T21:37:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T21:27:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T21:20:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T21:17:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-26T21:48:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-26T21:38:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-26T21:28:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-26T21:18:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-26T21:09:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-26T21:00:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T22:28:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T21:28:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T20:57:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T20:30:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T19:55:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T18:29:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T18:19:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T18:09:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T17:59:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T17:50:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T17:44:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T22:56:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T22:23:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T21:56:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T21:25:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T20:55:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T20:24:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T19:54:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T19:27:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T18:57:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T23:30:00Z",
      "orca_type": "offshore",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T22:40:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T22:30:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T22:20:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T22:10:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T22:00:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T21:50:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T21:40:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T21:30:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T21:20:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T21:10:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T21:00:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T20:51:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T18:51:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T18:41:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T18:31:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T18:30:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T23:25:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T23:20:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T23:15:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T23:06:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T22:55:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T22:45:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T22:35:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T22:25:00Z",
      "orca_type": "southern resident",
      "beachId": 20,
      "beachName": "Brother Jonathan Park / Vista Point"
    }
  ],
  [
    {
      "species": "orca",
      "quantity": "5",
      "sighted_at": "2017-11-09T18:11:00Z",
      "orca_type": "unknown",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "harbor porpoise",
      "quantity": "20",
      "sighted_at": "2017-10-01T00:38:00Z",
      "orca_type": "unknown",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "humpback",
      "quantity": "1",
      "sighted_at": "2017-09-03T00:45:00Z",
      "orca_type": "unknown",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "humpback",
      "quantity": "1",
      "sighted_at": "2017-07-29T21:55:00Z",
      "orca_type": "unknown",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "humpback",
      "quantity": "1",
      "sighted_at": "2017-07-16T02:39:00Z",
      "orca_type": "unknown",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": "14",
      "sighted_at": "2017-06-25T14:02:00Z",
      "orca_type": "unknown",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "gray whale",
      "quantity": "1 ",
      "sighted_at": "2017-06-14T13:30:00Z",
      "orca_type": "unknown",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-11-28T20:30:00Z",
      "orca_type": "offshore",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-11-14T20:28:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-11-14T18:09:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-26T22:08:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-26T16:36:00Z",
      "orca_type": "offshore",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-24T22:40:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-24T19:43:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-16T19:00:00Z",
      "orca_type": "offshore",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-12T21:30:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-10T21:36:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-10T21:26:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-10T21:16:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-10T21:06:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-10T21:06:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-09T18:15:00Z",
      "orca_type": "offshore",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-08T00:47:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-08T00:37:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-08T00:27:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-08T00:16:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-08T00:06:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-07T23:56:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-07T23:46:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-07T23:36:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-07T23:27:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T21:50:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T21:41:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T21:40:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T21:31:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T21:30:00Z",
      "orca_type": "offshore",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T21:21:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-04T14:30:00Z",
      "orca_type": "offshore",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-03T17:11:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-10-03T16:40:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-29T22:48:00Z",
      "orca_type": "offshore",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T22:17:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T22:07:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T22:00:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T21:47:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T21:37:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T21:27:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T21:20:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-28T21:17:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-26T21:48:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-26T21:38:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-26T21:28:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-26T21:18:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-26T21:09:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-26T21:00:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T22:28:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T21:28:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T20:57:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T20:30:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T19:55:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T18:29:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T18:19:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T18:09:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T17:59:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T17:50:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-25T17:44:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T22:56:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T22:23:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T21:56:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T21:25:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T20:55:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T20:24:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T19:54:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T19:27:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-22T18:57:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T23:30:00Z",
      "orca_type": "offshore",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T22:40:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T22:30:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T22:20:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T22:10:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T22:00:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T21:50:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T21:40:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T21:30:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T21:20:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T21:10:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T21:00:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T20:51:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T18:51:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T18:41:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T18:31:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-21T18:30:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T23:25:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T23:20:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T23:15:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T23:06:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T22:55:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T22:45:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T22:35:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    },
    {
      "species": "orca",
      "quantity": null,
      "sighted_at": "2016-09-20T22:25:00Z",
      "orca_type": "southern resident",
      "beachId": 36,
      "beachName": "Crescent Beach Picnic Area"
    }
  ]]


    module.exports = sampleWhaleSightingsData;
