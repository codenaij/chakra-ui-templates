"use client";

import {
	Box,
	Button,
	Container,
	Grid,
	GridItem,
	Heading,
	Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuPlus } from "react-icons/lu";

const filters = [
	{
		id: "color",
		name: "Color",
		options: [
			{ value: "white", label: "White" },
			{ value: "beige", label: "Beige" },
			{ value: "blue", label: "Blue" },
			{ value: "brown", label: "Brown" },
			{ value: "green", label: "Green" },
			{ value: "purple", label: "Purple" },
		],
	},
	{
		id: "category",
		name: "Category",
		options: [
			{ value: "new-arrivals", label: "All New Arrivals" },
			{ value: "tees", label: "Tees" },
			{ value: "crewnecks", label: "Crewnecks" },
			{ value: "sweatshirts", label: "Sweatshirts" },
			{ value: "pants-shorts", label: "Pants & Shorts" },
		],
	},
	{
		id: "sizes",
		name: "Sizes",
		options: [
			{ value: "xs", label: "XS" },
			{ value: "s", label: "S" },
			{ value: "m", label: "M" },
			{ value: "l", label: "L" },
			{ value: "xl", label: "XL" },
			{ value: "2xl", label: "2XL" },
		],
	},
];

export default function Example() {
	const [_mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

	return (
		<Box bg={"white"}>
			<Box>
				{/* Mobile filter dialog */}
				{/* <Dialog
					open={mobileFiltersOpen}
					onClose={setMobileFiltersOpen}
					className="relative z-40 lg:hidden"
				>
					<DialogBackdrop
						transition
						className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
					/>

					<div className="fixed inset-0 z-40 flex">
						<DialogPanel
							transition
							className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
						>
							<div className="flex items-center justify-between px-4">
								<h2 className="text-lg font-medium text-gray-900">Filters</h2>
								<button
									type="button"
									onClick={() => setMobileFiltersOpen(false)}
									className="-mr-2 flex size-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
								>
									<span className="sr-only">Close menu</span>
									<XMarkIcon aria-hidden="true" className="size-6" />
								</button>
							</div>

							Filters
							<form className="mt-4">
								{filters.map((section) => (
									<Disclosure
										key={section.name}
										as="div"
										className="border-t border-gray-200 pt-4 pb-4"
									>
										<fieldset>
											<legend className="w-full px-2">
												<DisclosureButton className="group flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
													<span className="text-sm font-medium text-gray-900">
														{section.name}
													</span>
													<span className="ml-6 flex h-7 items-center">
														<ChevronDownIcon
															aria-hidden="true"
															className="size-5 rotate-0 transform group-data-open:-rotate-180"
														/>
													</span>
												</DisclosureButton>
											</legend>
											<DisclosurePanel className="px-4 pt-4 pb-2">
												<div className="space-y-6">
													{section.options.map((option, optionIdx) => (
														<div key={option.value} className="flex gap-3">
															<div className="flex h-5 shrink-0 items-center">
																<div className="group grid size-4 grid-cols-1">
																	<input
																		defaultValue={option.value}
																		id={`${section.id}-${optionIdx}-mobile`}
																		name={`${section.id}[]`}
																		type="checkbox"
																		className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
																	/>
																	<svg
																		fill="none"
																		viewBox="0 0 14 14"
																		className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
																	>
																		<path
																			d="M3 8L6 11L11 3.5"
																			strokeWidth={2}
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			className="opacity-0 group-has-checked:opacity-100"
																		/>
																		<path
																			d="M3 7H11"
																			strokeWidth={2}
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			className="opacity-0 group-has-indeterminate:opacity-100"
																		/>
																	</svg>
																</div>
															</div>
															<label
																htmlFor={`${section.id}-${optionIdx}-mobile`}
																className="text-sm text-gray-500"
															>
																{option.label}
															</label>
														</div>
													))}
												</div>
											</DisclosurePanel>
										</fieldset>
									</Disclosure>
								))}
							</form>
						</DialogPanel>
					</div>
				</Dialog> */}

				<Container
					as="main"
					maxW={{ base: "2xl", lg: "7xl" }}
					px={{ base: 4, sm: 6, lg: 8 }}
					py={{ base: 16, sm: 24, lg: 24 }}
				>
					<Box borderBottom="1px" borderColor="gray.200" pb={10}>
						<Heading
							as="h1"
							fontSize={"4xl"}
							fontWeight={"bold"}
							letterSpacing={"tight"}
							color={"gray.900"}
						>
							New Arrivals
						</Heading>
						<Text mt={4} fontSize={"base"} color={"gray.500"}>
							Checkout out the latest release of Basic Tees, new and improved
							with four openings!
						</Text>
					</Box>

					<Grid
						pt={12}
						templateColumns={{
							base: "1fr",
							lg: "repeat(3, 1fr)",
							xl: "repeat(4, 1fr)",
						}}
						gap={{ lg: 8 }}
						// className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4"
					>
						<GridItem as="aside">
							<Text srOnly>Filters</Text>

							<Button
								variant={"ghost"}
								onClick={() => setMobileFiltersOpen(true)}
								display={{ base: "inline-flex", lg: "none" }}
								alignItems="center"
								p={0}
								h="auto"
							>
								<span className="text-sm font-medium text-gray-700">
									Filters
								</span>
								<LuPlus
									aria-hidden="true"
									className="ml-1 size-5 shrink-0 text-gray-400"
								/>
							</Button>

							<Box display={{ base: "none", lg: "block" }}>
								<form className="divide-y divide-gray-200">
									{filters.map((section) => (
										<div
											key={section.name}
											className="py-10 first:pt-0 last:pb-0"
										>
											<fieldset>
												<legend className="block text-sm font-medium text-gray-900">
													{section.name}
												</legend>
												<div className="space-y-3 pt-6">
													{section.options.map((option, optionIdx) => (
														<div key={option.value} className="flex gap-3">
															<div className="flex h-5 shrink-0 items-center">
																<div className="group grid size-4 grid-cols-1">
																	<input
																		defaultValue={option.value}
																		id={`${section.id}-${optionIdx}`}
																		name={`${section.id}[]`}
																		type="checkbox"
																		className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
																	/>
																	<svg
																		fill="none"
																		viewBox="0 0 14 14"
																		className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
																	>
																		<path
																			d="M3 8L6 11L11 3.5"
																			strokeWidth={2}
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			className="opacity-0 group-has-checked:opacity-100"
																		/>
																		<path
																			d="M3 7H11"
																			strokeWidth={2}
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			className="opacity-0 group-has-indeterminate:opacity-100"
																		/>
																	</svg>
																</div>
															</div>
															<label
																htmlFor={`${section.id}-${optionIdx}`}
																className="text-sm text-gray-600"
															>
																{option.label}
															</label>
														</div>
													))}
												</div>
											</fieldset>
										</div>
									))}
								</form>
							</Box>
						</GridItem>

						{/* Product grid */}
						<div className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
							{/* Your content */}
						</div>
					</Grid>
				</Container>
			</Box>
		</Box>
	);
}
