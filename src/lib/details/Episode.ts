import { IEpisode } from '../../typings'

export default class EpisodeDetails implements IEpisode {
    constructor(
        public name = '',
        public artists: string[] = [],
        public show_name = '',
        public release_date = '',
        public cover_url = ''
    ) {}
}
