// import { defineEventHandler, createError, appendHeader } from 'h3';
// import { pascalCase } from 'scule';
// // @ts-expect-error - no types available
// import components from '#component-example/nitro';

export default defineEventHandler((event) => {
	return {
		code: '<UPage></UPage>',
	};
});
