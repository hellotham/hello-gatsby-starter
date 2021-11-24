---
published: false
title: Financial Analysis and Portfolio Optimisation (Part 1)
description: Our new series of articles on financial analysis and portfolio optimisation using Python.
author: Chris Tham
date: 2021-10-19T00:00:00.000Z
featuredpost: false
image: ../../images/site-image.jpg
tags:
  - Finance
  - Portfolio Optimisation
  - Python
---

Welcome to a series of articles on Financial Analysis and Portfolio Optimisation. This started off as a series of Facebook and LinkedIn posts that I published whilst playing around with Python to try and optimise our investment portfolio. A fried of mine, Raj Dalal, has encouraged me to convert them into blog posts, so here we are.

## Background

It was the mid to late 1970s. I was 14 years old, and my father was thinking of purchasing some programmable scientific calculators for his office to use, so he brought back home some calculators he was evaluating. I remember playing with the HP-67 and TI-58, and I practiced writing programs for both of them.

One of the calculators came with a "solution book" illustrating example calculations and programs that can be used in various disciplines. One of the solution books was about Financial Analysis and it contained programs for calculating time value of money, bond and option pricing, etc. and that book blew my mind.

Years later I ended up doing a Masters of Applied Finance, one of the subjects I really enjoyed was Investment Theory. The course went through the fundamentals of portfolio management, securities pricing and analysis, and investment management. I always thought this will be very useful when I retired, because I can use the knowledge to manage our investment portfolio.

My first job was calculating the "Greek letters" (alpha, beta, gamma, etc.) of a synthetic options portfolio and transactions required to rebalance the portfolio. I created a way of distributing the calculations (written in C) across a network of Sun workstations.

As my career progressed, however, I moved away from being an analyst, and I stopped having a hands on role in either finance or computing. I didn't really think that much about personal investing, I was too busy.

I was lucky that when the Great Financial Crisis hit in 2008, I didn't have much invested in equities, so I didn't lose much money. But I realised it was a great opportunity to get into the market. We had an investment property, which we sold and invested the proceeds in selection of blue chip high dividend stocks plus some fixed income.

In hindsight, it proved to be a great move. Our portfolio doubled, then tripled. But I really still didn't have any time to actively manage the portfolio, so it was just accumulating money.

Then, sometime in the mid 2010s, I heard about an algorithmic trading platform called Quantopian. It allowed anyone to develop, test, and use trading algorithms to buy and sell securities using Python. I dreamed of retiring and spending my days trading. There was just one small problem: I haven't touched coding in years, and wasn't familiar with Python. It was just a bridge too far.

Fast forward to 2021. Our portfolio had performed well 10 years ago, but lately has been underperforming the market and clearly needs rebalancing. In 2020, many companies slashed their dividends, and we didn't earn nearly as much income as previous years. Interest rates have also fallen dramatically over the last 10 years to virtually zero and don't look like they are going up anytime soon.

I spent time learning Python and the `pandas` library. Pandas took a long time to learn, but was surprisingly powerful for manipulating large amounts of financial data.

To my disappointment, Quantopian no longer exists. It closed down in November 2020 after 9 years. It had a bold business model of offering a free platform to users, but tried to make money by crowdsourcing the best trading algorithms and using them to manage a hedge fund. Unfortunately, it turns out that maybe, just maybe, it's not so easy to make above market returns by algorithmic trading.

That caused me to pause. Does algorithmic trading even work? Maybe, but it seems if it does work it's for a very finite period of time. And all the usual issues with Artificial Intelligence & regression models (over-training, unstable features, multicollinearity, etc) apply.

I had an idea of using dark, alternative data in a multi-factor regression model to pick stocks, but then I discovered many people had exactly the same idea, and if they have been successful, they are keeping very quiet.

However, I still needed to rebalance our portofolio, but to do that I needed to understand it better. So I have decided to persevere with learning Python and using it for financial analysis and portfolio optimisation. Join me in these series of articles as I embark on a journey of learning and discovery.

But before we start, let's go through an overview of what portfolio optimisation is.

## Investing vs speculating

First of all, let's differentiate an investor from a speculator. I would classify a high proportion of people in the market as "speculators" - they buy and sell individual stocks (or ETFs, or real estate, or works of art) based on a variety of reasons (ranging from a "hot tip" they have heard from a friend or social media to even perhaps based on meticulously researched information). They make purchase and sale decisions based on their perception of future performance of individual assets, and not how the assets relate to each other. When we invested in our portfolio more than ten years ago, we were speculators. There is nothing wrong with being a speculator, we all speculate to some extent.

By contrast, an investor is someone who makes decisions based on the portfolio as a whole rather than the performance of individual assets. Portfolio optimisation therefore is the art of holding a basket of assets that complement each other, so that the performance of the portfolio maximises return and minimises risk.

But surely if a speculator picks the best 10 stocks, then the portfolio by definition is optimised? Not necessarily, because if we invested in 10 tech stocks (for example, or 10 banks, or whatever), if something affects the entire industry, all stocks will be similarly affected.

This is where diversification is important. The idea is that asset prices don't all move in the same path - as one stock goes up in price another may fall, particular if it is in a different industry, or in a different geographic region and subject to different economic factors. The idea is that if we invested in a range of stocks, our portfolio will be less "volatile" - the portfolio as a whole doesn't go up and down in price as much as any individual security. We get even more diversification if we invested in a range of assets from different classes: equities, real estate, bonds, whatever.

So we start caring less about the performance and volatility of individual stocks, but more about the overall return and the overall volatility. Ideally we want to choose a set of assets that complement each other, maximising the expected return of the portfolio whilst minimising the risk. This is where Modern Portfolio Theory comes in.

## Modern Portfolio Theory (MPT)

Harry Markowitz is generally credited as the "father" of Modern Portfolio Theory in his paper "Portfolio Selection," which was published in the Journal of Finance in 1952. He was later awarded a Nobel Prize.

The idea of MPT is simple. If we have a basket of say 10 assets (which can be anything: a share in a company, a house, a bond, an oil painting) and a fixed sum to invest (say $1m) then how much should we allocate that sum across the 10 assets to maximise return and minimise volatility?

Note that MPT doesn't help you choose the assets, you need to select them beforehand (from hot tips, or meticulous research). A common technique these days is to choose a range of ETFs from different asset classes and geographic regions.

You can allocate equal weight to each asset, ie. 10% or $100,000 to east asset, and you'll end up with a portfolio. All the weights need to add up to 100%, but you can freely choose (including for example investing 100% in just one asset in which case you have a single asset portfolio). Obviously the performance and risk of the portfolio is the weighted average of the characteristics of each individual asset.

MPT says that there are a specific set of weights that maximises the expected return for any specific risk level. For example, if you wanted a portfolio with a variance of say 10%, there is a specific set of weights that will result in a portfolio with the highest return compared to all other combinations of weights. If you were willing to tolerate 15% variance, there is another specific set of weights that will result in a portfolio with the highest return.

If we imagine that each specific set of weights will result in a unique portfolio with an expected return and variance. If we plotted each portfolio on a graph of expected return vs variance, we will end up shading a whole area of the graph. If we look at the shaded area, and draw a line just over the top of the area, that's the line that contains the best portfolios - each dot on that line has the maximinum return for any given level of variance.

Markowitz called the line the Efficient Frontier. And that's basically Portfolio Optimisation in a nutshell - to boldly go possibly where no investor has gone before, and seek the efficient frontier and invest there.
