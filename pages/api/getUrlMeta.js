import ogs from 'open-graph-scraper';

export default async (req, res) => {
  try {
    let response = null;
    await ogs({ url: req.query.url }, (_, results) => (response = results));

    if (!response.success) {
      throw response.error;
    }

    return res.status(200).json({
      success: 1,
      meta: {
        title: response.ogTitle,
        description: response.ogDescription,
        image: {
          url: response.ogImage.url
        }
      }
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
