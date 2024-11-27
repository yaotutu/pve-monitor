export interface HostData {
	cpu: {
		usage: number;
		temperature: number;
		model: string;
	};
	memory: {
		usage: number;
	};
	disk: [
		{
			name: string;
			usage: number;
		},
	];
}
